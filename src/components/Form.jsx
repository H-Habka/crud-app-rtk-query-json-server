import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { toast } from "react-hot-toast";
import { useAddContactMutation,useUpdateContactMutation } from "../services/ContactsApi";
import { useNavigate } from "react-router-dom";

const Form = ({ buttonLabel, currentName ,currentEmail, currentContact, id}) => {
    const navigate = useNavigate();
    const [name, setName] = useState(currentName || '');
    const [email, setEmail] = useState(currentEmail || "");
    const [contact, setContact] = useState(currentContact || "");

    const [addContact] = useAddContactMutation();
    const [editContact] = useUpdateContactMutation();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("some data is missing");
        } else {
            if(buttonLabel === 'Edit'){
                await editContact({id, name, contact, email });
                toast.success("contact updated successfully");
            }else{
                await addContact({ name, contact, email });
                toast.success("contact added successfully");
            }
            navigate("/");
        }
    };
    return (
        <form
            className="flex flex-col gap-2 items-center"
            onSubmit={handleFormSubmit}
        >
            <InputField value={name} setValue={setName} title="Name" />
            <InputField value={email} setValue={setEmail} title="Email" />
            <InputField value={contact} setValue={setContact} title="Contact" />
            <button
                type="submit"
                className={`text-xl font-bold py-1 rounded w-full px-2 ${
                    buttonLabel === "Edit"
                        ? "bg-green-500  hover:text-green-700"
                        : "bg-blue-500  hover:text-blue-700"
                }  hover:bg-gray-300 mt-4`}
            >
                {buttonLabel}
            </button>
        </form>
    );
};

export default Form;
