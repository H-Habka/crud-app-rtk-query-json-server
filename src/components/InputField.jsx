import React from 'react'

const InputField = ({title, value, setValue}) => {
  return (
    <label className="flex text-xl font-bold  flex-col items-center  gap-3">
        <div>{title}</div>
        <input className="py-1 px-2 text-xl text-gray-700 font-semibold rounded outline-none" value={value} onChange={(e) => setValue(e.target.value)}/>
    </label>
  )
}

export default InputField