import Form from '../components/Form'
import { useLoaderData } from 'react-router-dom';

interface Props{
    editJobSubmit:any
}


const EditJobPage = ({editJobSubmit}:Props) => {
    const job = useLoaderData();

  return (
    <>
        <Form JobSubmit={editJobSubmit} transaction='Edit' job={job}/>
    </>
  )
}

export default EditJobPage