interface IProps{
  message:string;
}

const ErrorMessage =({message}:IProps) => {
    return (
        message ? <span className="text-red-500 text-xs mt-1">{message}</span> : null
    )
}

export default ErrorMessage;    