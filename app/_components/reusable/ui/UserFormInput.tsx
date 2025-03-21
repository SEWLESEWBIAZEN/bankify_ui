import { UserRegisterState } from '@/definitions/type-definitions/auth'
import React from 'react'

const UserFormInput = ({ value, changeFunc, state, label, Icon, name }:
    { value: string, changeFunc: (x: any) => void, state: UserRegisterState, label: string, Icon: any, name: string }) => {
    return (
        <div>
            <label className="  mb-2 block text-sm font-semibold ">{label}</label>
            <div className="relative flex items-center">
                <input
                    className="w-full text-sm bg-slate-100 dark:bg-primary focus:bg-transparent active:bg-transparent rounded-none px-4 py-3"
                    id={name}
                    type="text"
                    name={name}
                    placeholder={`Enter your ${label}`}
                    value={value}
                    onChange={changeFunc}
                />
                <Icon className="w-4 h-4 absolute right-4 text-stone-300 dark:text-primary" />
            </div>
            {state.errors && Object.entries(state.errors).map(([fieldName, errors]) => (
                <div key={fieldName} className='flex flex-col justify-start'>
                    {fieldName === name && errors.map((error, index) => (
                        <li key={index} className="text-[12px] text-red-500 italic">
                            {error}
                        </li>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default UserFormInput