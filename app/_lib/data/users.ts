"use server";
import { baseUrl } from "@/app/_services/envService";
import axios from "axios";
import https from "https";

export async function getAllUsers() {   
    try {
        const response = await axios.get(`${baseUrl}/Users/GetAll`, {
            headers: {
                "Content-Type": "application/json",                  
                "Cache-Control": "no-store",  // Prevent caching in some cases
            },
            httpsAgent:new https.Agent({
                rejectUnauthorized:false
              })
        });

        return response?.data;
    } catch (error: any) {   
        console.error("Error fetching users:", error?.response?.data || error?.message);
        return { success: false, message: "Failed to fetch users" };
    }
}
