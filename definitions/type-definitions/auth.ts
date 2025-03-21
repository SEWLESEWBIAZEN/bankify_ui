//change password state
export type ChangePasswordState = {
    success?: string | null;
    submitError?: string | null;
    errors?: {
      oldPassword?: string[];
      newPassword?: string[];
      confirmPassword?: string[];
    }
  }

  //change password state
export type UserRegisterState = {
    success?: string | null;
    submitError?: string | null;
    errors?: {
      firstName?: string[];
      lastName?: string[];
      email?: string[];
      phoneNumber?: string[];
      address?: string[];
      profilePicture?: string[];    
    }
  }

  export type UserRegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
};

export type Role={
  id:number;
  roleName:string;
  roleClaims:any[]
}

export type UpdateUserRoleState={
  success?:string | null;
  submitError?:string | null;
  errors?:{
    userId?:string[];
    roleIds?:string[];
  }
}
  
  