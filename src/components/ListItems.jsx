import React from "react";
import SingleItem from "./SingleItem";

const ListItems = ({data}) => {
    return (
        <ul className="w-fit flex flex-col text-center">
            <li className="grid bg-slate-800 text-white font-bold" style={{gridTemplateColumns : "1fr 2fr 3fr 2fr 2fr"}}>
                <div className="p-2">No.</div>
                <div className="p-2">Name</div>
                <div className="p-2">Email</div>
                <div className="p-2">Contact</div>
                <div className="p-2">Actions</div>
            </li>
            {
                data?.map((item,idx) => (
                    <SingleItem key={idx} item={item} number={idx+1}/>
                ))
            }
        </ul>
    );
};

export default ListItems;
