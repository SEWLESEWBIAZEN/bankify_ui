import { UserRegisterState } from '@/definitions/type-definitions/auth';
import { PictureInPicture } from 'lucide-react'
import React, { useState } from 'react'

const ProfilePictureForm = ({
    
    setProfilePicture, 
    state}:{
        
     setProfilePicture:(pic:File | null)=>void, 
     state:UserRegisterState}) => {
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setProfilePicture(file);
    };
    return (
        <div className="mt-8 space-y-4">
            <div>
                <label className="  mb-2 block text-sm font-semibold ">Profile Picture</label>
                <div className="relative flex items-center">
                    <input
                        className="w-full text-sm bg-slate-100 dark:bg-primary focus:bg-transparent active:bg-transparent rounded-none px-4 py-3 truncate cursor-pointer"
                        id="profile"
                        type="file"
                        name="profile"
                        placeholder="upload profile picture"
                        onChange={handleFileChange}
                        aria-label="Upload profile picture"
                        accept='image/*'                        
                    />
                    <PictureInPicture className="w-4 h-4 absolute right-4 text-stone-300 dark:text-primary" />
                </div>
                {state.errors && state.errors.profilePicture && (
                    <div>
                        {state.errors.profilePicture.map((error, index) => (
                            <span key={index} className='text-[12px] text-red-500 italic'>{error}</span>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default ProfilePictureForm