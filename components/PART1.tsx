'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeartText from "./HeartText";

export default function PART1(){
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [maxValue, setMaxValue] = useState(1);
    const [gallery1, setGallery1] = useState(true);
    const [gallery2, setGallery2] = useState(false);
    const [gallery3, setGallery3] = useState(false);
    const [gallery4, setGallery4] = useState(false);
    const [gallery5, setGallery5] = useState(false);
    const [gallery6, setGallery6] = useState(false);
    const [gallery7, setGallery7] = useState(false);
    const [gallery8, setGallery8] = useState(false);
    const [gallery9, setGallery9] = useState(false);
    const [gallery10, setGallery10] = useState(false);
    const [end, setEnd] = useState(false);

    const [randomX, setRandomX] = useState(20);
    const [randomY, setRandomY] = useState(500);
  
    const funcRandom = () => {
      return Math.floor(Math.random() * 150); // Ubah rentang angka acak sesuai kebutuhan Anda
    }
  
    const randomClick = () => {
      setRandomX(funcRandom());
      setRandomY(funcRandom());
    }
    return (
        <div className="max-h-screen">
            <div className="animate p-10 min-h-screen items-center justify-center flex flex-col gap-5">
                <motion.h1 className="text-2xl font-bold font-sans text-center text-sky-100"
                initial={{ x: 0, rotate: 0, y:0 }} // Variasi awal
                animate={{ x: isClicked ? -500 : 0,y: isClicked ? -120 : 0, rotate: isClicked ? 20 : 0 }} // Variasi animasi saat diklik
                transition={{ duration: 3, ease: [0.6, -0.05, 0.01, 0.99] }} // Durasi animasi
                >
                    Mauu liatt gaa pacarr guee?
                </motion.h1>


                <motion.button 
                initial={{ x: 0, rotate: 0, y:0 }} // Variasi awal
                animate={{ x: isClicked ? 500 : 0, y: isClicked ? 100 : 0, rotate: isClicked ? -50 : 0 }} // Variasi animasi saat diklik
                transition={{ duration: 3, ease: [0.175, 0.85, 0.42, 0.96]  }} // Durasi animasi
                className="bg-violet-300 py-3 px-6 rounded shadow"
                onClick={() => setIsClicked(true)}
                
                >Mauuuuuu
                </motion.button>

                {/* part 2 */}
                <motion.div
                   initial={{ 
                    x: 0, 
                    rotate: 0,
                    scale: 0,
                     y:0 }} // Variasi awal
                   animate={{ 
                    scale: isClicked ? 1 : 0,
                    y: isClicked ? -250 : 0
                 }} // Variasi animasi saat diklik
                   transition={{ duration: 2, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                   style={{ position: 'relative', width: '130px', height: '200px' }}
                >
                <Image src="/pap1.jpg" fill alt="moja" className="absolute inset-0 z-20"/>
                </motion.div>

                <motion.div
                initial={{ 
                    x: 0, 
                    rotate: 0,
                    scale: 0,
                     y:0 }} // Variasi awal
                   animate={{ 
                    scale: isClicked ? 1 : 0,
                    y: isClicked ? -200 : 0
                 }} // Variasi animasi saat diklik
                 transition={{ duration: 3, ease: [0.79, 0.14, 0.15, 0.86]  }} // Durasi animasi
                 className="text-sky-100 text-lg text-center"
                >
                    haloo semuanyaa,, kenalinn dia mojaa.. lucu banget kan namanya whwhwhwhw? diaa gadiss kecill yangg poloss, cantiikk, baiik, dan imutt ini adalah pacar guee...
                </motion.div>
                <motion.button 
               initial={{ 
                x: 0, 
                rotate: 0,
                scale: 0,
                 y:0 }} // Variasi awal
               animate={{ 
                scale: isClicked ? 1 : 0,
                y: isClicked ? -200 : 0
             }}
                transition={{ duration: 3, ease: [0.175, 0.85, 0.42, 0.96]  }} // Durasi animasi
                className="bg-violet-300 py-3 px-6 rounded shadow"
                onClick={() => setIsClicked2(true)}
                
                >lanjutt
                </motion.button>
            </div>


            <motion.div className="bg-slate-500 min-h-screen z-30 absolute inset-0"
               initial={{ x: 0, rotate: 0, y:1000 }} // Variasi awal
               animate={{
                y: isClicked2 ? 0 : 1000,
                }} // Variasi animasi saat diklik
               transition={{ duration: 3, ease: [0.6, -0.05, 0.01, 0.99] }} // Durasi animasi
            >
                <HeartText>Cantikk kann?</HeartText>
                <motion.button 
                initial={{ x: 1000, rotate: 0, y:1000 }} // Variasi awal
                animate={{ y: 500, x: 200 }} // Variasi animasi saat diklik                transition={{ duration: 3, ease: [0.175, 0.85, 0.42, 0.96]  }} // Durasi animasi
                className="bg-violet-300 py-3 px-6 rounded shadow"
                onClick={() => setIsClicked3(true)}
                
                > banget
                </motion.button>
                <motion.button 
                initial={{ x: 20, rotate: 0, y:500 }} // Variasi awal
                animate={{ x: randomX, y: randomY }}
                transition={{ duration: 0.5, ease: [0.175, 0.85, 0.42, 0.96]  }} // Durasi animasi
                className="bg-yellow-300 py-3 px-6 rounded shadow"
                onClick={randomClick}>
                    gak
                </motion.button>
            </motion.div>


            <motion.div className="
            h-screen justify-center
            gap-5
            flex flex-col items-center
            bg-gradient-to-b from-red-200 via-red-300 to-yellow-200 min-h-screen z-40 absolute inset-0"
               initial={{ x: 1000, rotate: 0, y:0 }} // Variasi awal
               animate={{
                x: isClicked3 ? 0 : 1000,
                }} // Variasi animasi saat diklik
               transition={{ duration: 3, ease: [0.6, -0.05, 0.01, 0.99] }} // Durasi animasi
            >
                <div
                   style={{ position: 'relative', width: '300px', height: '120px' }}
                >
                <Image src="/pap2.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-lg shadow"/>
                </div>

                <motion.p className="text-center text-slate-700">
                    diaa duniaa guaa... tempatt guaa berpijakk, tertawaa, bahagiaa, tersenyumm, dan bercerita... gua cuma takutt gua kehilangan diaa, yang sekarangg dan selamanyaa ituu dia cewee cewee palingg palingg terbaikk dalam segii apapun yang pernah gua temuii... gua tauu gw ga lebih baik dari cowo cowo di luarr sana,, tapi apakah gue pantas mendapatkan bidadari semungil ini? 
                </motion.p>

                <motion.p className="text-center text-slate-700">
                    im so lucky that im found this little cutie angel.. angel yang selalu pengertian dan selalu selalu lucuu setiap saat wuygfwqeyghifwegyhifewhgfwd... untuk sayangg, jangan perna tinggalin aku yaakk.. tidak akan aku dan kau temui cinta sebaik ini {"<3"}
                </motion.p>

                <motion.button 
                initial={{ x: 1000, rotate: 0, y:1000 }} // Variasi awal
                animate={{ y: 500, x: 200 }} // Variasi animasi saat diklik
                transition={{ duration: 3, ease: [0.175, 0.85, 0.42, 0.96]  }} // Durasi animasi
                className="bg-violet-300 py-3 px-6 rounded shadow"
                onClick={() => setIsClicked3(true)}
                
                > {":("}
                </motion.button>
                <button onClick={() => {setIsClicked4(true); setGallery1(true)}} 
                                className="bg-violet-300 py-3 px-6 rounded shadow"
                >lanjut</button>
            </motion.div>


           <motion.div className="
            h-screen justify-center
            gap-5
            flex flex-col items-center
            bg-slate-700 min-h-screen z-50 absolute inset-0"
               initial={{ x: -2000, rotate: 0, y:0 }} // Variasi awal
               animate={{
                x: isClicked4 ? 0 : -2000,
                }} // Variasi animasi saat diklik
               transition={{ duration: 3, ease: [0.6, -0.05, 0.01, 0.99] }} // Durasi animasi
            >
                <motion.h1
                    className="text-white text-3xl font-bold"
                    initial={{ x: 1000, rotate: 0, y:0, opacity:0}} // Variasi awal
                    animate={{
                       x: gallery1 ? 0 : 1000,
                       opacity: gallery1 ? 1 : 0
                    }} // Variasi animasi saat diklik
                >
                    Hey
                </motion.h1>

                <motion.h1
                    className="text-white text-lg font-bold"
                    initial={{ x: -1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                    animate={{
                       x: gallery2 ? 0 : -1000,
                       opacity: gallery2 ? 1 : 0
                    }} // Variasi animasi saat diklik
                    transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }} // Durasi animasi
                >
                    This is about our gallery{"<3"}
                </motion.h1>

                    <div className="absolute">
                        <motion.div
                            initial={{ x: 1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                            animate={{
                                x: gallery3 ? 0 : 1000,
                                opacity: gallery3 ? 1 : 0
                            }} // Variasi animasi saat diklik
                        transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                        style={{ position: 'relative', width: '200px', height: '200px' }}
                        >
                        <Image src="/pap3.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-xl shadow"/>
                        </motion.div>
                    </div>

                    <div className="absolute">
                        <motion.div
                            initial={{ x: -1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                            animate={{
                                x: gallery4 ? 0 : -1000,
                                opacity: gallery4 ? 1 : 0
                            }} // Variasi animasi saat diklik
                        transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                        style={{ position: 'relative', width: '200px', height: '200px' }}
                        >
                        <Image src="/pap4.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-xl shadow"/>
                        </motion.div>
                    </div>

                <div className="absolute">
                    <motion.div
                        initial={{ x: 1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                        animate={{
                            x: gallery5 ? 0 : 1000,
                            opacity: gallery5 ? 1 : 0
                        }} // Variasi animasi saat diklik
                    transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                    style={{ position: 'relative', width: '200px', height: '200px' }}
                    >
                    <Image src="/pap5.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-xl shadow"/>
                    </motion.div>
                </div>

                <div className="absolute">
                <motion.div
                    initial={{ x: -1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                    animate={{
                        x: gallery6 ? 0 : -1000,
                        opacity: gallery6 ? 1 : 0
                    }} // Variasi animasi saat diklik
                   transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                   style={{ position: 'relative', width: '200px', height: '200px' }}
                >
                 <Image src="/pap6.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-xl shadow"/>
                </motion.div>
                </div>

                <div className="absolute">
                <motion.div
                    initial={{ x: 1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                    animate={{
                        x: gallery7 ? 0 : 1000,
                        opacity: gallery7 ? 1 : 0
                    }} // Variasi animasi saat diklik
                   transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                   style={{ position: 'relative', width: '200px', height: '200px' }}
                >
                 <Image src="/pap7.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-xl shadow"/>
                </motion.div>
                </div>
                
                <div className="absolute">
                <motion.div
                    initial={{ x: -1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                    animate={{
                        x: gallery8 ? 0 : -1000,
                        opacity: gallery8 ? 1 : 0
                    }} // Variasi animasi saat diklik
                   transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                   style={{ position: 'relative', width: '200px', height: '200px' }}
                >
                 <Image src="/pap8.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-xl shadow"/>
                </motion.div>
                </div>

                <div className="absolute">
                <motion.div
                    initial={{ x: 1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                    animate={{
                        x: gallery9 ? 0 : 1000,
                        opacity: gallery9 ? 1 : 0
                    }} // Variasi animasi saat diklik
                   transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                   style={{ position: 'relative', width: '200px', height: '200px' }}
                >
                 <Image src="/pap9.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-xl shadow"/>
                </motion.div>
                </div>

                <div className="absolute">
                <motion.div
                    initial={{ x: -1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                    animate={{
                        x: gallery10 ? 0 : -1000,
                        opacity: gallery10 ? 1 : 0
                    }} // Variasi animasi saat diklik
                   transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                   style={{ position: 'relative', width: '200px', height: '200px' }}
                >
                 <Image src="/pap10.jpg" fill alt="moja" className="absolute inset-0 z-20 rounded-xl shadow"/>
                </motion.div>
                </div>

                <div className="absolute">
                <motion.div
                    initial={{ x: 1000, rotate: 0, y:0, opacity: 0 }} // Variasi awal
                    animate={{
                        x: end ? 0 : 1000,
                        opacity: end ? 1 : 0
                    }} // Variasi animasi saat diklik
                   transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67]  }} // Durasi animasi
                >
                  <HeartText>9.9</HeartText>
                </motion.div>
                </div>

                <button className={`${end && "hidden"} bg-violet-300 py-3 px-6 rounded shadow mt-52`}disabled={end} onClick={() => {
                    if(gallery1){
                        setGallery1(false)
                        setGallery2(true)
                    } else if(gallery2){
                        setGallery2(false)
                        setGallery3(true)
                    } else if(gallery3){
                        setGallery3(false)
                        setGallery4(true)
                    } else if(gallery4){
                        setGallery4(false)
                        setGallery5(true)
                    } else if(gallery5){
                        setGallery5(false)
                        setGallery6(true)
                    } else if(gallery6){
                        setGallery6(false)
                        setGallery7(true)
                    } else if(gallery7){
                        setGallery7(false)
                        setGallery8(true)
                    } else if(gallery8){
                        setGallery8(false)
                        setGallery9(true)
                    } else if(gallery9){
                        setGallery9(false)
                        setGallery10(true)
                    } else if(gallery10){
                        setGallery10(false)
                        setEnd(true)
                    }
                    }
            }>next</button> 

            </motion.div>
        </div>

    )
}