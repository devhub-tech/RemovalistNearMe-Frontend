export interface RegisterWithEmailInitialState{
    loading: boolean,
    userInfo:any,
    error: any
    success: boolean,
}
export interface RegisterWithEmailPayload{
    email: string,
    password: string,
    registration_method: string
}

export interface LoginPayload{
    username: string,
    password: string
}

export interface LoginInitialState{
    loading: boolean,
    token: string,
    userInfo: any
    error: any
    success: boolean,
}

export interface SendOtpState{
    loading:boolean,
    data: string,
    error: any,
    success: boolean
}

export interface SendOtpPayload{
    phone_number: string
}

export interface VerifyOtpState{
    loading:boolean,
    data: string,
    error: any,
    success: boolean
}

export interface VerifyOtpPayload{
    phone_number: string
    otp: string,
}