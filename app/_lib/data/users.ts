"use server";
import { axiosInstance } from "@/app/_services/axiosServices";
import { baseUrl } from "@/app/_services/envService";
export async function getAllUsers() {
    try {
        const response = await axiosInstance.get(`${baseUrl}/Users/GetAll`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching users:", error?.response?.data || error?.message);
        return { success: false, message: "Failed to fetch users" };
    }
}
