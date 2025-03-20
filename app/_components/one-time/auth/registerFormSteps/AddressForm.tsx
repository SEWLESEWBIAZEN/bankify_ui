import React from 'react'
import { Home, Mail, Phone } from 'lucide-react'
import { UserRegisterFormData, UserRegisterState } from '@/definitions/type-definitions/auth'
import UserFormInput from '@/app/_components/reusable/ui/UserFormInput'

const AddressForm = ({ formData, setFormData, state }: { formData: UserRegisterFormData, setFormData: any, state: UserRegisterState }) => {
    return (
        <div className="mt-8 space-y-4">
         <UserFormInput
                value={formData.email}
                changeFunc={(e) => setFormData((prev: UserRegisterFormData) => ({ ...prev, [e.target.name]: e.target.value }))}
                state={state}
                Icon={Mail}
                label='Email Address'
                name='email'
            />
           <UserFormInput
                value={formData.phoneNumber}
                changeFunc={(e) => setFormData((prev: UserRegisterFormData) => ({ ...prev, [e.target.name]: e.target.value }))}
                state={state}
                Icon={Phone}
                label='Phone Number'
                name='phoneNumber'
            />
           <UserFormInput
                value={formData.address}
                changeFunc={(e) => setFormData((prev: UserRegisterFormData) => ({ ...prev, [e.target.name]: e.target.value }))}
                state={state}
                Icon={Home}
                label='Address'
                name='address'
            />
        </div>
    )
}

export default AddressForm