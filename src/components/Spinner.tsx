import { CSSProperties } from "react";
import { PulseLoader } from "react-spinners";

interface Props{
    loading: boolean;
}


const Spinner = ({loading}: Props) => {

    const override:CSSProperties = {
        display: 'table',
        margin: '20% auto'
    }
  return (
    <PulseLoader
    color='#4287f5'
    loading= {loading}
    cssOverride={override}
    size={50}
    />
  )
}

export default Spinner