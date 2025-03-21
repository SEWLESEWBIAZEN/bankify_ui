'use client';
import { registerUser, updateUser } from '@/app/_lib/actions/auth';
import {  ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useActionState, useEffect, useState } from 'react';
import NameForm from './registerFormSteps/NameForm';
import AddressForm from './registerFormSteps/AddressForm';
import { Progress } from '@/components/ui/progress';
import { ThreeDot } from 'react-loading-indicators';
import ProfilePictureForm from './registerFormSteps/ProfilePictureForm';
import { UserRegisterFormData, UserRegisterState } from '@/definitions/type-definitions/auth';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

const RegisterForm = ({user,edit}:{user?:any,edit?:boolean}) => {

    //this form is used as user form for both update and regiter
     //form state
     const [formData, setFormData] = useState<UserRegisterFormData>({
        firstName:user?.firstName?? '',
        lastName: user?.lastName??'',
        email: user?.email??'',
        phoneNumber:user?.phoneNumber?? '',
        address: user?.address??'',
    });   
    //states
    const [profilePicture, setProfilePicture] = useState<File | null>(null)
    const [currentStep, setCurrentStep] = useState(1);
    const initialState:UserRegisterState={errors:{},success:null, submitError:null}
    const serverAction=edit? updateUser:registerUser;
    const [state, formAction, isPending] = useActionState(serverAction, initialState);
    
    //steps in the registration(forms)
    const steps = [
        { component: <NameForm key="name" formData={formData} setFormData={setFormData}  state={state} />, title: "First name and last name." },
        { component: <AddressForm key="address" formData={formData} setFormData={setFormData}  state={state} />, title: "Email, phone number and physical address" },
        { component: <ProfilePictureForm key="profilePicture"  setProfilePicture={setProfilePicture} state={state} />, title: "Profile Picture, and Finish" }
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
    edit && formdata.append("id",user.id);
    formdata.append("firstName",formData.firstName);
    formdata.append("lastName",formData.lastName);
    formdata.append("email",formData.email);
    formdata.append("phoneNumber",formData.phoneNumber);
    formData.address&& formdata.append("address",formData.address);
    profilePicture&& formdata.append("profilePicture",profilePicture);

    useEffect(()=>{
        if(state.success){
            toast.success(state.success?? edit ? "Updated":"Registered!")
            edit? redirect("/ok/account-managt/users"):""
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
                                    <h2 className="text-lg font-bold">{edit?"Update":"Register"} User | Bankify</h2>
                                    <div className='font-normal text-stone-500 text-[12px]'>{steps[currentStep - 1].title}</div>
                                </div>
                                <div className=" flex justify-end items-start ">
                                    {currentStep === steps.length &&
                                        <button disabled={isPending}  type='submit'
                                        className=" py-1 px-4 text-sm  rounded-none text-white bg-primary hover:bg-stone-500 cursor-pointer focus:outline-none items-center">
                                            {isPending ? edit ? "Updating" :"Registering" : edit?"Update": "Register"} {isPending ? <ThreeDot size='small' color="white" /> : ""}
                                        </button>
                                    }                                    
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

                   {!edit&& <span className="w-full px-8 flex flex-row gap-2 items-start justify-start text-start">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="text-primary font-semibold">
                            Login
                        </Link>
                    </span>}
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;