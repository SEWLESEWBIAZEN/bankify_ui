'use server'

import { axiosInstance } from "@/app/_services/axiosServices";
import { baseUrl } from "@/app/_services/envService";
import { tokenProvider } from "@/app/_services/tokenService";
import { redirect } from "next/navigation";

export async function getAllRoles(forDropdown: boolean) {
    const { accessToken } = await tokenProvider();
    try {
        const response = await axiosInstance.get(`${baseUrl}/AppRole/GetAll?forDropdown=${forDropdown}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return response?.data;
    } catch (error: any) {
        if (error?.response?.status === 401 || error?.response?.status === 403) {
            redirect("/ok/401");
        }
       
        return { success: false, message: "Failed to fetch roles" };
    }
}


export async function getUserRoles(userId:number) {
    const { accessToken } = await tokenProvider();
    try {
        const response = await axiosInstance.get(`${baseUrl}/AppRole/GetRolesByUser?userId=${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return {payload:response?.data, success: true, message: "user roles fetched successfully" };
    } catch (error: any) {
        if (error?.response?.status === 401 || error?.response?.status === 403) {
            redirect("/ok/401");
        }
        console.error("Error fetching user roles:", error?.response.status || error?.message);
        return {payload:[], success: false, message: "Failed to fetch user roles" };
    }
}

export async function getAllClaims() {
    const { accessToken } = await tokenProvider();
    try {
        const response = await axiosInstance.get(`${baseUrl}/AppClaim/GetAll`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return response?.data;
    } catch (error: any) {
        if (error?.response?.status === 401 || error?.response?.status === 403) {
            redirect("/ok/401");
        }
        
        return { success: false, message: "Failed to fetch claims" };
    }
}
export async function getRoleClaims(roleId:number) {

    const { accessToken } = await tokenProvider();
    try {
        const response = await axiosInstance.get(`${baseUrl}/AppClaim/GetClaimsByRole?roleId=${roleId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
   
        return response?.data;
    } catch (error: any) {
        if (error?.response?.status === 401 || error?.response?.status === 403) {
            redirect("/ok/401");
        }    
        return { success: false, message: "Failed to fetch role claims" };
    }
}



