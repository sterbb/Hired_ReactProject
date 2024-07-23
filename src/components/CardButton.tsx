import { Link } from "react-router-dom"


interface Props{
    textColor?:string
    bgColor:string
    buttonText: string
    href: string;
}

const CardButton = ({textColor="white", bgColor, buttonText, href}: Props) => {
  return (
    <Link
        to={href}
        className={`inline-block ${bgColor} ${textColor} rounded-lg px-4 py-2 hover:bg-gray-700`}
    >
        {buttonText}
    </Link>
  )
}

export default CardButton