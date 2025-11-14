import type { Variants } from 'framer-motion';

export const fadeIn: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}


export const floatingIcon: Variants = {
    hidden: { scale: 0.9 },
    visible: {
        scale: [0.98, 1.02, 0.98], rotate: [-2, 2, -2]
    }
}