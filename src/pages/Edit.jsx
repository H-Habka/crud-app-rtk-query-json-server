import React, { useEffect } from "react";
import {toast} from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import { useSingleContactQuery } from "../services/ContactsApi";

const Edit = () => {
    const navigate = useNavigate();
    const params = useParams()
    const {data, isLoading, error} = useSingleContactQuery(params.id)

    useEffect(() => {
        if(error){
            toast.error("something went wrong")
        }
    },[error])

    if(isLoading || !data)return <p className="text-3xl font-bold text-center">Loading ...</p>

    const {name, contact,email} = data

    return (
        <div className="flex items-center justify-center pt-20">
            <Form buttonLabel="Edit" currentName={name} currentEmail={email} currentContact={contact} id={params.id}/>
        </div>
    );
};

export default Edit;
