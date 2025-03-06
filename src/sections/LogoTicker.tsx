"use client"
import acmeLogo from "@/assets/logo-acme.png"
import apexLogo from "@/assets/logo-apex.png"
import celestialLogo from "@/assets/logo-celestial.png"
import quantumLogo from "@/assets/logo-quantum.png"
import pulseLogo from "@/assets/logo-pulse.png"
import echoLogo from "@/assets/logo-echo.png"
import {motion} from "framer-motion";
export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
    <div className="container">
    <div className="flex items-center gap-5">
    <div className="flex-1 md:flex-none">
      <h2 className="text-2xl text-center tracking-tighter bg-gradient-to-b from-white to-[#4a208a] text-transparent bg-clip-text uppercase">Confiado por grandes empresas</h2>
    </div>
    <div className=" flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div className="flex flex-none gap-14 pr-14 -translate-x-0"
      initial={{
        translateX: "-50%"
      }}
      animate={{
        translateX: "0"
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear"
      }}>
          {[
            acmeLogo,
            pulseLogo,
            echoLogo,
            celestialLogo,
            apexLogo,
            quantumLogo,
            acmeLogo,
            pulseLogo,
            echoLogo,
            celestialLogo,
            apexLogo,
            quantumLogo
          ].map((logo) =>(
            <img src={logo.src} key={logo.src} className="h-6 w-auto"/>
          ))}
      </motion.div>
    </div>
    </div>
    </div>
    </section>
  )
};
