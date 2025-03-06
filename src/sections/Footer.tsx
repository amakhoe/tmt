import  Logo from "@/assets/logo.svg"
import X from "@/assets/social-x.svg"
import Youtube from "@/assets/social-youtube.svg"
import Insta from "@/assets/social-instagram.svg"
export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
     <div className="container">
     <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="flex gap-2 items-center lg:flex-1">
        <Logo className="h-6 w-6" />
      <div className="font-medium">Amakhoe Design INC</div>
      </div>
      <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1">
      <a href="" className="text-white/70 hover:text-white">Features</a>
      <a href="" className="text-white/70 hover:text-white">Features</a>
      <a href="" className="text-white/70 hover:text-white">Features</a>
      <a href="" className="text-white/70 hover:text-white">Features</a>
    </nav>
    <div className="flex gap-5 lg:flex-1">
    <Insta className="text-white/40 hover:text-white"/>
    <X className="text-white/40 hover:text-white"/>
    <Youtube className="text-white/40 hover:text-white"/>
    </div>
    </div>
    </div>
    </footer>
 
  )
};
