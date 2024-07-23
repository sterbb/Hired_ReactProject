import { ReactNode } from "react"


interface Props {
    
    children:ReactNode
    bg: string;
    textColor?:string;
}
const Card = ({children, bg,textColor = "text-black"}: Props) => {

  return (
    <div className={`${bg} ${textColor} p-6 rounded-lg shadow-md`}>
        {children}
    </div>

  )
}

export default Card