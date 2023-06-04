import React from 'react'

const SelectButton = ({children , selected, onClick}) => {
  return (
    <>
    {!selected && (
        <span className='border-2 p-1 border-blue-800 rounded-md md:p-4 cursor-pointer hover:bg-blue-800' onClick={onClick}>
            {children}
        </span>
    )}
    {selected && (
        <span className='border-2 p-1 border-blue-800 rounded-md md:p-4 cursor-pointer bg-blue-800' onClick={onClick}>
            {children}
        </span>
    )}
    </>
  )
}

export default SelectButton