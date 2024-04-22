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