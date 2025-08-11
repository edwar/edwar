"use client"
import { fadeInBottom, fadeInLeft, fadeInRight, fadeInTop, fadeIn } from "backup/src/lib/transition"
import { useAnimation, useInView, motion } from "framer-motion"
import { ReactNode, useEffect, useRef } from "react"

interface Props {
    children: ReactNode
    className?: string
    variant?: "letf" | "right" | "top" | "bottom" | "fadein"
}
export function MotionTransitionFadeIn({ children, className, variant }: Readonly<Props>) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()


    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    const getVariant = () => {
        if(variant === "bottom") return fadeInBottom()
        if(variant === "letf") return fadeInLeft()
        if(variant === "right") return fadeInRight()
        if(variant === "top") return fadeInTop()
        return fadeIn()
    }

    

    return (
        <div ref={ref} className={className}>
            <motion.div
                variants={getVariant()}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
            >
                {children}
            </motion.div>
        </div>
    )
}
