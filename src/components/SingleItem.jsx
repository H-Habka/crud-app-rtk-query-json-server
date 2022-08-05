import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDeleteContactMutation } from "../services/ContactsApi";
import ToolTip from "./ToolTip";
import { toast } from "react-hot-toast";

const SingleItem = ({ item,number }) => {
    const { id, name, email, contact } = item;
    const navigate = useNavigate();
    const [deletContact] = useDeleteContactMutation()

    const handleDeleteClicked = async (id) => {
        if(window.confirm("Are You Sure You Want To Delete This Contact ?")){
            await deletContact(id)
            toast.success("contact deleted successfully")
        }
    }
    return (
        <li
            className="grid odd:bg-gray-200 font-semibold even:bg-gray-300"
            style={{ gridTemplateColumns: "1fr 2fr 3fr 2fr 2fr" }}
        >
            <div className="overflow-hidden px-2 py-2">{number}</div>
            <div className="overflow-hidden px-2 py-2">{name}</div>
            <div className="overflow-hidden px-2 py-2">{email}</div>
            <div className="overflow-hidden px-2 py-2">{contact}</div>
            <div className=" px-2 py-2 flex justify-around">
                <ToolTip title="Edit">
                    <AiFillEdit
                        size={24}
                        className="cursor-pointer hover:opacity-50 text-green-700"
                        onClick={() => navigate(`/edit/${id}`)}
                    />
                </ToolTip>
                <ToolTip title="Delete">
                    <AiFillDelete
                        size={24}
                        className="cursor-pointer hover:opacity-50 text-red-700"
                        onClick={() => handleDeleteClicked(id)}
                    />
                </ToolTip>
                <ToolTip title="Show">
                    <HiExternalLink
                        size={24}
                        className="cursor-pointer hover:opacity-50 text-blue-700"
                        onClick={() => navigate(`/contact/${id}`)}
                    />
                </ToolTip>
            </div>
        </li>
    );
};

export default SingleItem;
