import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
     color:string;
   }
   
   const CircleColor =({color,...rest}:IProps) => {
       return (
        <span className="block w-4 h-4 rounded-full cursor-pointer mb-2"
         style={{backgroundColor:color}}
         {...rest}/>
       )
   }
   
   export default CircleColor;