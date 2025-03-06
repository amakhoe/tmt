"use client"
import {DotLottieCommonPlayer, DotLottiePlayer} from "@dotlottie/react-player"
import productoImage from "@/assets/product-image.png"
import Image from "next/image"
import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];
const FeatueTab = (props:(typeof tabs)[number] & 
ComponentPropsWithRef<'div'> & {selected: boolean}) =>{
  const tabRef = useRef<HTMLDivElement>(null);
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);
  const PercentageX = useMotionValue(0);
  const PercentageY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${PercentageX}% ${PercentageY}%, black, transparent)`;
  useEffect(() => {
    if(!tabRef.current || !props.selected) return;

    PercentageX.set(0);
    PercentageY.set(0);

    const {height, width} = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
       width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop"
    }
    animate(PercentageX, [0,100,100,0,0], options);
    animate(PercentageY, [0,100,100,0,0], options);
  }, [props.selected])
  const handleTabHover = () => {
    if (dotlottieRef.current === null) return;
    dotlottieRef.current.seek(0);
    dotlottieRef.current.play();
  };
  return (
    <div key={props.title} 
    onMouseEnter={handleTabHover}
     ref={tabRef}
     onClick={props.onClick}
     className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative">
      
      {props.selected && (
      <motion.div style={{
      maskImage,
        }}
   className="absolute inset-0 border border-[#A369FF] rounded-xl"></motion.div>
      )}
    
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer src={props.icon} className="w-5 h-5" ref={dotlottieRef} autoplay/>
          </div>
          <div className="font-medium">
            {props.title} </div>
            {props.isNew && (
              <div className="text-x font-semibold text-black rounded-full px-2 py-0.5 bg-[#8c44ff]">
              Novo
            </div>
            )}
            </div>
  )
}
export const Features = () => {
 const [selectedTab, setSelectedTab] = useState(0);
 
 const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
 const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
 const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

 const backgroundPosition = useMotionTemplate`${backgroundPositionX}% 
 ${backgroundPositionY}%`;
 const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
 
 const handleSelectTab  = (index: number) => {
  setSelectedTab(index);

  const animateOptions: ValueAnimationTransition = {
    duration: 2,
    ease: "easeInOut",
  }
  animate(
    backgroundSizeX,
    [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
    animateOptions,
  );
  animate(
    backgroundPositionX,
    [backgroundPositionX.get(), tabs[index].backgroundPositionX],
    animateOptions,
  );
  animate(
    backgroundPositionY,
    [backgroundPositionY.get(), tabs[index].backgroundPositionY],
    animateOptions,
  );
 }
  return (
  <section className="py-20">
    <div className="container">
      <h2 className="text-5xl font-medium text-center tracking-tighter bg-gradient-to-b from-white to-[#4a208a] text-transparent bg-clip-text uppercase">Elevate your SEO efforts</h2>
      
      <div className="mt-10 flex flex-col lg:flex-row gap-3">
      {tabs.map((tab, tabIndex) =>(
        <FeatueTab {...tab} 
        selected = {selectedTab === tabIndex}
        onClick={() => handleSelectTab(tabIndex)}
        key={tab.title} />
      ))}
      </div>
      <div className="border border-white/20 p-2.5 rounded-xl mt-3">
        <motion.div 
        className="aspect-video bg-cover border border-white/20 rounded-lg"
        style={{
          backgroundPosition,
          backgroundSize,
          backgroundImage: `url(${productoImage.src})`,
        }}>
        </motion.div >
        
      </div>
    </div>
  </section>)
};
