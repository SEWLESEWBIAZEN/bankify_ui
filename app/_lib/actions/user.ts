'use server'
import { axiosInstance } from "@/app/_services/axiosServices";
import { baseUrl } from "@/app/_services/envService";
import { tokenProvider } from "@/app/_services/tokenService";
import { DeleteState } from "@/definitions/type-definitions/common";

export async function deleteUser(prevState: DeleteState, id: number): Promise<DeleteState> {

    //declaring a return state once
    let returnState: DeleteState = { success: null, submitError: null }
    const { accessToken } = await tokenProvider()
    try {
        const response = await axiosInstance.delete(`${baseUrl}/Users/Delete?Id=${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        returnState.success = response.data.message ?? "User Deleted Successfully!";
     
    }
    catch (e: any) {
        returnState.submitError = `${e.response.status},${e.response.statusText ?? "Unable to delete."}`
    }
    return returnState;
}