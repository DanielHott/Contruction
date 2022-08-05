import { Button } from "./style"
import React from "react"

export function ButtonForm({text, color, fontColor}) {
    return (
        <Button bg={color} color={fontColor} >{text}</Button>
    )
}