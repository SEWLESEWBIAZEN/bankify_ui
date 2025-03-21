"use server";
import { axiosInstance } from "@/app/_services/axiosServices";
import { baseUrl } from "@/app/_services/envService";
import { tokenProvider } from "@/app/_services/tokenService";
import { redirect } from "next/navigation";


export async function getAllUsers() {
    const {accessToken}=await tokenProvider();
    try {
        const response = await axiosInstance.get(`${baseUrl}/Users/GetAll`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return response?.data;
    } catch (error: any) {
        if (error?.response?.status === 401 || error?.response?.status ===403 ) {
            redirect("/ok/401");
      }
        console.error("Error fetching users:", error?.response.status || error?.message);
        return { success: false, message: "Failed to fetch users" };
    }
}

export async function getUserByid(id:number){
    const {accessToken}=await tokenProvider();
    try {
        const response = await axiosInstance.get(`${baseUrl}/Users/GetById?Id=${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return response?.data;
    } catch (error: any) {
        if (error?.response?.status === 401 || error?.response?.status ===403 ) {
            redirect("/ok/401");
      }
        console.error("Error fetching user:", error?.response.status || error?.message);
        return { success: false, message: "Failed to fetch user" };
    }
}
