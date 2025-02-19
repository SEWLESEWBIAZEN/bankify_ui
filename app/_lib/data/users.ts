"use server";
import { instance } from "@/services/axiosService";
import { baseUrl } from "@/services/envService";

export default async function getAllUsers() {
  try {
    let response = await instance.get(`${baseUrl}/Users/GetAll`, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });

    return response.data;
  } catch (error: any) {
    return null;
  }
}
