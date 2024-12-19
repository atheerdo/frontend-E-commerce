
import {InputHTMLAttributes} from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

const Input =({...rest}:IProps) => {
    return (
        
            <input className="border-[1px] border-gray-300 shadow-lg 
            rounded-md focus:border-indigo-500 focus:outline-none
            focus:ring-1 p-2 text-sm" {...rest}/>
     
    )
}

export default Input;