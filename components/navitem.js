import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NavItem({ children, icon, url }) {
    const [open, setOpen] = useState(false);

    return (
        <li className={`nav-item`} >
            <a href={url ? url : "#"} className="icon-button" onClick={() => setOpen(!open)}>
                {icon}
            </a>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="dropdown"
                variants={{
                    open: {
                        x: 5,
                        opacity: 1,
                        zIndex: 5,
                        scale: 1,
                    },
                    closed: {
                        scale: 0,
                        opacity: 0,
                        pointerEvents: "none",
                    },
                }}
            >
                {children}
            </motion.div>
        </ li>
    )
}