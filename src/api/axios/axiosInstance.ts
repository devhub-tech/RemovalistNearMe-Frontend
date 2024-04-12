import axios from "axios";
import { HOST_URL } from "../../constants/hosts";

export const axiosInstance=axios.create({
    baseURL: HOST_URL
})