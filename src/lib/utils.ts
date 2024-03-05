import { customAlphabet } from "nanoid"

export function createId(length = 7) {
    return customAlphabet(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        length
    )()
}