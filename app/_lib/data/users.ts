"use server";
import { axiosInstance } from "@/app/_services/axiosServices";
import { baseUrl } from "@/app/_services/envService";
import { tokenProvider } from "@/app/_services/tokenService";
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
        console.error("Error fetching users:", error?.response?.data || error?.message);
        return { success: false, message: "Failed to fetch users" };
    }
}
