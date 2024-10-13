import React from 'react';

function Input({ label, placeholder, type, name }) {
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-green-400 font-bold text-lg'>{label}</label>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                className="py-2 px-3 bg-transparent text-white border-b-2 border-white focus:border-green-500 outline-none placeholder-gray-400 transition-all duration-300"
            />
        </div>
    );
}

export default Input;
