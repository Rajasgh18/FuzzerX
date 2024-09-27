from fastapi import FastAPI, Query, HTTPException
from pathlib import Path
import ast

app = FastAPI()

# 1. Route for File Enumeration
@app.get("/enumerate-files/")
def enumerate_files(app_path: str = "."):
    """
    Enumerates files and directories starting from the specified base path.
    Default path is the current directory.
    """
    file_list = []
    base_directory = Path(app_path)
    
    if base_directory.is_dir():
        for path in base_directory.rglob('*'):
            file_list.append(str(path))
        return {"enumerated_files": file_list}
    else:
        return {"error": f"Path {app_path} is not a valid directory"}

# 2. Route for API Endpoint Discovery
@app.get("/discover-endpoints/")
def discover_endpoints(app_path: str = Query(..., description="Path to the folder containing application files")):
    """
    Discover all API endpoints from Python files in the specified folder.
    Assumes the files are FastAPI applications and parses routes from the files.
    """
    target_folder = Path(app_path)
    
    # Ensure the folder exists
    if not target_folder.is_dir():
        raise HTTPException(status_code=404, detail=f"Folder {app_path} not found.")
    
    api_routes = []

    # Iterate over all Python files in the specified directory
    for python_file in target_folder.rglob('*.py'):
        try:
            with open(python_file, "r") as file:
                file_content = file.read()
            
            # Parse the file into an Abstract Syntax Tree (AST)
            parsed_ast = ast.parse(file_content)
            
            # Traverse the AST to find FastAPI route declarations
            for node in ast.walk(parsed_ast):
                if isinstance(node, ast.Call):
                    # Looking for calls to FastAPI route methods (get, post, put, etc.)
                    if hasattr(node.func, "attr") and node.func.attr in {"get", "post", "put", "delete", "patch"}:
                        # Extracting the route path from the function call
                        if node.args and isinstance(node.args[0], ast.Constant):
                            api_routes.append({
                                "method": node.func.attr.upper(),
                                "path": node.args[0].value,
                                "defined_in": str(python_file)  # Add the file where the endpoint is defined
                            })
        
        except Exception as e:
            # Handle any errors related to file reading or parsing
            raise HTTPException(status_code=500, detail=f"Error parsing file {python_file}: {str(e)}")
    
    return {"discovered_endpoints": api_routes}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0")