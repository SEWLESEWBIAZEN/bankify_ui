import React from 'react'
import { CircleUserRound } from 'lucide-react'
import { UserRegisterFormData, UserRegisterState } from '@/definitions/type-definitions/auth'
import UserFormInput from '@/app/_components/reusable/ui/UserFormInput'

const NameForm = ({ formData, setFormData, state }: { formData: UserRegisterFormData, setFormData: any, state: UserRegisterState }) => {
    return (
        <div className="mt-8 space-y-4">
            <UserFormInput
                value={formData.firstName}
                changeFunc={(e) => setFormData((prev: UserRegisterFormData) => ({ ...prev, [e.target.name]: e.target.value }))}
                state={state}
                Icon={CircleUserRound}
                label='First Name'
                name='firstName'
            />
            <UserFormInput
                value={formData.lastName}
                changeFunc={(e) => setFormData((prev: UserRegisterFormData) => ({ ...prev, [e.target.name]: e.target.value }))}
                state={state}
                Icon={CircleUserRound}
                label='last Name'
                name='lastName'
            />
        </div>
    )
}

export default NameForm