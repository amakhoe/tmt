import LogoIcon from "@/assets/logo.svg"
import Menu from "@/assets/icon-menu.svg"
import {Button} from "@/components/button"

const NavLinks = [
  {label: "Home", href:"#"},
  {label: "About", href:"#"},
  {label: "Services", href:"#"},
  {label: "Clientes", href:"#"}
];
export const Header = () => {
  return(
    <section className="py-4 border-b border-white/20 md:border-none z-10 sticky top-0 backdrop-blur">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
    <div className="container">
      <div className="flex justify-between items-center border border-white/15 p-2.5 rounded-xl mx-auto md:backdrop-blur">
        <div>
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center">
            <LogoIcon className="h-8 w-8" />
          </div>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 mx-auto">
          {NavLinks.map((link) => (
                <a href={link.href} key={link.label} className="text-white/70 hover:text-blue-700 transition">
                  {link.label}
                </a>
              ))}
          </nav>
        </div>
        <div className="flex gap-4 items-center">
        <Button>Junte-se</Button>
            <Menu  className="md:hidden"/>
        </div>
      </div>
    </div>
      </section>
  )
};
