'use client';
import { registerUser } from '@/app/_lib/actions/auth';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useActionState, useEffect, useState } from 'react';
import NameForm from './registerFormSteps/NameForm';
import AddressForm from './registerFormSteps/AddressForm';
import { Progress } from '@/components/ui/progress';
import { ThreeDot } from 'react-loading-indicators';
import ProfilePictureForm from './registerFormSteps/ProfilePictureForm';
import { UserRegisterFormData, UserRegisterState } from '@/definitions/type-definitions/auth';
import { toast } from 'sonner';

const RegisterForm = () => {
    //form state
    const [formData, setFormData] = useState<UserRegisterFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
    });

    //states
    const [profilePicture, setProfilePicture] = useState<File | null>(null)
    const [currentStep, setCurrentStep] = useState(1);
    const initialState:UserRegisterState={errors:{},success:null, submitError:null}
    const [state, formAction, isPending] = useActionState(registerUser, initialState);
    
    //steps in the registration(forms)
    const steps = [
        { component: <NameForm key="name" formData={formData} setFormData={setFormData}  state={state}/>, title: "Add first name and last name." },
        { component: <AddressForm key="address" formData={formData} setFormData={setFormData}  state={state}/>, title: "Add email, phone number and physical address" },
        { component: <ProfilePictureForm  setProfilePicture={setProfilePicture} state={state}/>, title: "Profile Picture, and Finish" }
    ];

    //onclick handlers for back and forth buttons in refgistration steps
    const handleNextClick = () => {
        if (currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
        }
    };
    const handlePrevClick = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    //preparing a formdata to be sent 
    const formdata:FormData=new FormData();
    formdata.append("firstName",formData.firstName);
    formdata.append("lastName",formData.lastName);
    formdata.append("email",formData.email);
    formdata.append("phoneNumber",formData.phoneNumber);
    formData.address&& formdata.append("address",formData.address);
    profilePicture&& formdata.append("profilePicture",profilePicture);

    useEffect(()=>{
        if(state.success){
            toast.success(state.success??"Registered!")
        }
        if(state.submitError){
            toast.error(state.submitError??"Error occured")
        }

    },[state])
    return (
        <div>
            <form action={formAction.bind(null, formdata)} className="">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <Progress value={(currentStep / steps.length) * 100} className='' />
                    <div className="max-w-md w-full">
                        <div className="p-8 rounded-2xl bg-transparent border-primary text-primary dark:text-primary-foreground">
                            <div className='w-full flex flex-row items-center justify-between '>
                                <div>
                                    <h2 className="text-lg font-bold">Register | Bankify</h2>
                                    <div className='font-normal text-stone-500 text-[12px]'>{steps[currentStep - 1].title}</div>
                                </div>
                                <div className=" flex justify-end items-start ">
                                    {currentStep === steps.length &&
                                        <button disabled={isPending} className=" py-1 px-4 text-sm  rounded-none text-white bg-primary hover:bg-stone-500 cursor-pointer focus:outline-none items-center">
                                            {isPending ? "Registering" : "Register"} {isPending ? <ThreeDot size='small' color="white" /> : ""}
                                        </button>}                                    
                                </div>
                            </div>
                            {steps[currentStep - 1].component}
                        </div>
                        <div className=" p-8 flex flex-row justify-between">
                            <button
                                type="button"
                                disabled={currentStep === 1}
                                onClick={handlePrevClick}
                                className={`cursor-pointer hover:text-muted ${currentStep === 1 ? "text-stone-300 dark:text-primary" : ""}`}
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                disabled={currentStep === steps.length}
                                onClick={handleNextClick}
                                className={`cursor-pointer hover:text-muted ${currentStep === steps.length ? "text-stone-300 dark:text-primary" : ""}`}
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </div>

                    <span className="w-full px-8 flex flex-row gap-2 items-start justify-start text-start">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="text-primary font-semibold">
                            Login
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;