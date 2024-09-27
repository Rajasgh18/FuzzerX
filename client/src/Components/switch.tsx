import { useNavigate } from "react-router-dom";

interface Props {
    path: string;
    badgeColor: string;
    text: string;
}

export const Switch = ({badgeColor, text, path}: Props) => {
    const router = useNavigate();
    
    return (
        <div onClick={()=> router(path)} className="p-2 py-1 rounded-full bg-[#51557354] hover:bg-[#3a3d5754] cursor-pointer">
            <div className="px-2 py-4 rounded-full max-w-[180px] bg-[#51557354] text-xs text-center flex items-center">
                <span className="size-9 flex-shrink-0 rounded-full" style={{backgroundColor: badgeColor}}/>
                <p className="font-medium px-1">{text}</p>
            </div>
        </div>
    );
};