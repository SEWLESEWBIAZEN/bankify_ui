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
export type Claim={
  id:number;
  claimString:string;
}

export type Role={
  id:number;
  roleName:string;
  roleClaims:Claim[]
}

export type UpdateUserRoleState={
  success?:string | null;
  submitError?:string | null;
  errors?:{
    userId?:string[];
    roleIds?:string[];
  }
}
export type UpdateRoleClaimState={
  success?:string | null;
  submitError?:string | null;
  errors?:{
    appRoleId?:string[];
    appClaimsId?:string[];
  }
}

export type AddNewRoleState={
  success?:string | null;
  submitError?:string | null;
  errors?:{
    appRoleName?:string[];
  }
}



  
  