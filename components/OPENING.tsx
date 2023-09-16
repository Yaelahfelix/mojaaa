'use client'

import {motion} from "framer-motion"
import { useState } from "react";

export default function OPENING(){
    const [isClicked, setIsClicked] = useState(false);

    return (
        <motion.div 
        onClick={() => setIsClicked(true)}
        initial={{ y: 0 }} // Variasi awal
        animate={{ y: isClicked ? -1000 : 0 }} // Variasi animasi saat diklik
        className="text-white text-2xl font-bold flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full absolute inset-0 z-20">
            Hi
        </motion.div>
    )
}