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