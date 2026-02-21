'use client'
import { useEffect, useState } from "react"

export const useWindowResize = () => {
 const [windowResize, setWindowResize] = useState({ width: 0, height: 0 })
 useEffect(() => {
        const handleResize = () => {
            setWindowResize({ width: window.innerWidth, height: window.innerHeight })
        }
        handleResize() // Set initial size
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    return { windowResize}
}
 