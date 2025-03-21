"use server"
import { signIn, signOut } from "@/auth";
import { z } from "zod";
import { AuthError } from "next-auth";
import { axiosInstance } from "@/app/_services/axiosServices";
import { baseUrl } from "@/app/_services/envService";
import { tokenProvider } from "@/app/_services/tokenService";
import { RegisterUserSchema, UpdateUserRoleSchema } from "@/definitions/schema-defnitions/auth";
import { UpdateUserRoleState, UserRegisterState } from "@/definitions/type-definitions/auth";
import { redirect } from "next/navigation";
import { error } from "console";


//authenticate
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Invalid credentials.';
      }
    }
    throw error;
  }
}

export const logOut = async () => {
  await signOut();
};

//Register user
export async function registerUser(
  prevState: UserRegisterState,
  formData: FormData
)
  : Promise<UserRegisterState> {

  const returnState: UserRegisterState = { errors: {}, success: null, submitError: null };
  const validatedFields = RegisterUserSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    address: formData.get("address"),
    profilePicture: formData.get("profilePicture") as File,
  })

  if (!validatedFields.success) {
    returnState.errors = validatedFields.error.flatten().fieldErrors;
    returnState.submitError = "Invalid element, please make sure all are valid";
  }

  try {
    const response = await axiosInstance.post(`${baseUrl}/Users/Create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    returnState.success = response.data.message ?? "User Registred Successfully!";
  }

  catch (e: any) {
    if (e?.response?.status === 401) {
      redirect("/ok/401");
    }

    returnState.submitError = `${e?.response?.status} ${e?.response?.statusText}, ${e.response.data.errors[0] ?? "Error occured while registering user!"}`;
  }

  return returnState;
}

//update user
export async function updateUser(
  prevState: UserRegisterState,
  formData: FormData
)
  : Promise<UserRegisterState> {
  const { accessToken } = await tokenProvider();
  const returnState: UserRegisterState = { errors: {}, success: null, submitError: null };
  const validatedFields = RegisterUserSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    address: formData.get("address"),
    profilePicture: formData.get("profilePicture") as File,
  })

  if (!validatedFields.success) {
    returnState.errors = validatedFields.error.flatten().fieldErrors;
    returnState.submitError = "Invalid element, please make sure all are valid";
  }

  try {
    const response = await axiosInstance.put(`${baseUrl}/Users/Update`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`
      }
    })
    returnState.success = response.data.message ?? "User Updated Successfully!";
  }

  catch (e: any) {
    if (e?.response?.status === 401) {
      redirect("/ok/401");
    }
    returnState.submitError = `${e?.response?.status} ${e?.response?.statusText}, ${e.response.data.errors[0] ?? "Error occured while updating user!"}`;
  }

  return returnState;
}

export async function updateUserRoles(prevState: UpdateUserRoleState, formData: FormData): Promise<UpdateUserRoleState> {

  const { accessToken } = await tokenProvider();
  const validatedFields = UpdateUserRoleSchema.safeParse({
    userId: parseInt(formData.get('userId') as string, 10),
    roleIds: formData.getAll('roleIds').map((roleId) => parseInt(roleId as string, 10)),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      submitError: "Invalid data sent!"
    }
  }
  const body = validatedFields.data;

  try {
    const response = await axiosInstance.post(`${baseUrl}/Users/AddRoleToUser`, body, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return {
      success: `${response.data.message ?? "User Role Updated!"}`
    }

  }
  catch (e: any) {
    if (e?.response?.status === 401) {
      redirect("/ok/401");
    }
    return {
      submitError: `${e?.response?.status} ${e?.response?.statusText} ?? "Error occured while updating user role!"}`
    };
  }

}



