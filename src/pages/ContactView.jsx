import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSingleContactQuery } from "../services/ContactsApi";
import {toast} from 'react-hot-toast'


const ContactView = () => {
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
        <div className=" flex items-center justify-center pt-20">
            <div className="flex flex-col gap-4 border border-gray-700 pb-4 items-center">
                <div className="bg-gray-500 px-8 py-2 w-full text-2xl font-bold text-gray-200">
                    User Contact Details
                </div>
                <div className="tet-xl">
                    <span className="font-bold">ID: </span>
                    <span>{params.id}</span>
                </div>
                <div className="tet-xl">
                    <span className="font-bold">Name: </span>
                    <span>{name}</span>
                </div>
                <div className="tet-xl">
                    <span className="font-bold">Email: </span>
                    <span>{email}</span>
                </div>
                <div className="tet-xl">
                    <span className="font-bold">Contact: </span>
                    <span>{contact}</span>
                </div>
                <button onClick={() => navigate('/')} className="text-gray-200 bg-blue-500 font-bold py-1 px-2 rounded hover:bg-gray-300 hover:text-blue-700">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ContactView;
