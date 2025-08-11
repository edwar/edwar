export const fadeInTop = () => {
    return {
        hidden: {
            y: -80,
            x: 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.7,
                delay: 0.3,
                ease: [0.25, 0.6, 0.3, 0.8]
            }
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: 0.3,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}

export const fadeInLeft = () => {
    return {
        hidden: {
            y: 0,
            x: -80,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.7,
                delay: 0.3,
                ease: [0.25, 0.6, 0.3, 0.8]
            }
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: 0.3,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}

export const fadeInRight = () => {
    return {
        hidden: {
            y: 0,
            x: 80,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.7,
                delay: 0.3,
                ease: [0.25, 0.6, 0.3, 0.8]
            }
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: 0.3,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}
export const fadeInBottom = () => {
    return {
        hidden: {
            y: 80,
            x: 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.7,
                delay: 0.3,
                ease: [0.25, 0.6, 0.3, 0.8]
            }
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: 0.3,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}

export const fadeIn = () => {
    return {
        hidden: {
            y: 0,
            x: 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.9,
                delay: 0.3,
                ease: [0.25, 0.6, 0.3, 0.8]
            }
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.9,
                delay: 0.3,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}