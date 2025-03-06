"use client"
import starsBg from "@/assets/stars.png"
import {Button} from "@/components/button"
import { motion } from "framer-motion";
export const Hero = () => {
  return(
    <section className="h-[492px] md:h-[800px] flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" 
    style={{
      backgroundImage: `url(${starsBg.src})`
    }}>
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border opacity-20 top-1/2 left-1/2
       -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] 
       shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1)]"></div>
       
       <motion.div
       style={{
        translateY: "-50%",
        translateX: "-50%"
       }}
       animate={{
        rotate: "1turn"
       }}
       transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
       }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px]  border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
       <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute h-5 w-5 left-full  border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
       <div className="h-2 w-2 rounded-full bg-white"></div>
       </div>
       </motion.div>

    <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px]  border border-dotted border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <motion.div
       style={{
        translateY: "-50%",
        translateX: "-50%"
       }}
       animate={{
        rotate: "-1turn"
       }}
       transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
       }} className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px]  border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </motion.div>
    


    <div className="container relative">
      <h1 className="text-8xl text-center md:text-[168px] md:leading-none font-semibold tracking-tight bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
        TMT</h1>
      <p className="text-lg text-white/70 mt-5 text-center md:text-xl max-w-xl mx-auto">
          Tecnologia, Midia Entretenimento e Telecomunicacao.
      </p>
      <div className="flex justify-center mt-5">
      <Button>Junte-se</Button>
      </div>
    </div>
    </section>
  )
};
