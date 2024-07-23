import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";



interface Props{
    addJobSubmit:any
}

const AddJobPage = ({addJobSubmit}: Props) => {

 
  return (
    <>
      <Form JobSubmit={addJobSubmit} transaction="Add"/>
    </>
  );
};

export default AddJobPage;
