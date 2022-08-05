import { Input } from "./style"
import React from "react"

export function InputForm({name, type}) {
    if (type === 'password') {
        return <Input id="pass" placeholder={name} type={type}/>
    }
    return (
        <Input placeholder={name} type={type}/>
    )
}