import { useEffect, useState } from "react"

export const useDebounce = (value, delay = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState()
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (!value) return setDebouncedValue()
        setIsTyping(true)
        const handler = setTimeout(() => {
            if (value?.includes("<") || value?.includes("/>")) {
                return alert('Invalid search word or sentence.')
            }
            setDebouncedValue(value)
            setIsTyping(false)
        }, delay)

        return () => clearTimeout(handler)
    }, [value, delay])

    return { debouncedValue, isTyping }
}