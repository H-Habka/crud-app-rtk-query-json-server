import React, { useState } from "react";

const ToolTip = ({ children, title }) => {
    const [itemHoverd, setItemHoverd] = useState(false);
    return (
        <div
            className="relative"
            onMouseEnter={() => setItemHoverd(true)}
            onMouseLeave={() => {
                setItemHoverd(false);
            }}
        >
            {itemHoverd && (
                <div className="font-semibold absolute w-fit p-1 bg-gray-400 text-xs -top-6 rounded z-50">
                    {title}
                </div>
            )}
            {children}
        </div>
    );
};

export default ToolTip;
