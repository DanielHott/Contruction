import { Button } from "./style"
import React from "react"

export function ButtonForm({text, color, fontColor}) {
    return (
        <Button bg={color} color={fontColor} type="submit">{text}</Button>
    )
}

export function ButtonClick({text, color, fontColor}) {
    return (
        <button bg={color} color={fontColor} type="Click">{text}</button>
    )
}