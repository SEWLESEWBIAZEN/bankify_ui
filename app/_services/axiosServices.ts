
import axios, { AxiosInstance } from 'axios'
import https from 'https'
const agent= new https.Agent ({
    rejectUnauthorized:false
})

export const axiosInstance:AxiosInstance = axios.create({
    httpsAgent:agent
});