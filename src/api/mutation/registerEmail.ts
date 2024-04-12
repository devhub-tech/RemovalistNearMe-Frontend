import { REGISTER_EMAIL } from "../../constants/api"
import { axiosInstance } from "../axios/axiosInstance"

export const RegisterWithEmailService= async(payload)=>{
    return axiosInstance.post(REGISTER_EMAIL,payload)
}