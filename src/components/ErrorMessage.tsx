interface IProps{
  message:string;
}

const ErrorMessage =({message}:IProps) => {
    return (
        message ? <p className="text-red-500 text-xs mt-1">{message}</p> : null
    )
}

export default ErrorMessage;    