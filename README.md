# FuzzerX: AI-Powered Web Application Fuzzer

FuzzerX is an advanced, AI-integrated web application fuzzer designed to automate the discovery of vulnerabilities in web applications. It tests for common vulnerabilities such as SQL injection, XSS, CSRF, and more. The tool generates custom payloads and classifies anomalies using machine learning models, providing real-time analysis of potential security issues.

## Project Setup

To get started with local development, follow the steps below to install the necessary dependencies.

### Client-Side Dependencies

We use **pnpm** for managing dependencies in the ReactJS. Ensure that all package installations or removals are done using `pnpm`.

```bash
cd client # navigate to client directory
pnpm install
```

### Server-Side Dependencies

Our FastAPI server uses **pipenv** to manage a virtual Python environment. Ensure you use `pipenv` for all package installations and removals.

```bash
cd server # navigate to server directory
pipenv shell # Activate the virtual environment
pipenv install
```

### Running the Development Server

Starting the Client

```bash
cd client
pnpm run dev
```

Starting the Backend

```bash
cd server
uvicorn main:app --reload
```
