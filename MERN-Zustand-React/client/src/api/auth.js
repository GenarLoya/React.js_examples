import axios from "../libs/axios"

export const loginRequest = async (email, pass) => {
    return axios.post("/login",{
        email,
        pass,
    })
}

export const profileRequest = async () => {
    return axios.get("/profile")
}