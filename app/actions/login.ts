'use server'

import exp from "constants"
import { redirect } from "next/navigation"

export async function login(prevState: any, formData: FormData) {
    
    const rawFormData = {
        username: formData.get('username'),
        password: formData.get('password'),
    }
    console.log(rawFormData, rawFormData.username == 'admin' && rawFormData.password == 'admin')

    //Call database
    if (rawFormData.username == 'admin' && rawFormData.password == 'admin'){
        console.log('test')
        redirect('/')
    }else{
        return { message: "Username and password is not correct"}
    }
}