import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import https from "https";


const agent = new https.Agent({
  rejectUnauthorized: false,
});

export const instance: AxiosInstance = axios.create({
  httpsAgent: agent,
});

// instance.interceptors.request.use(
//   async (
//     config: InternalAxiosRequestConfig
//   ): Promise<InternalAxiosRequestConfig> => {
//     try {
//       const { email }: { email: string | null } = await tokenProvider();
//       config.headers.set("email", email || "");

//       return config;
//     } catch (error) {
//       throw error;
//     }
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
