import { useState } from "react"

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = [
    {
      link: "/services",
      name: "Services",
    },
    {
      link: "/faq",
      name: "FAQ",
    },
    {
      link: "/pricing",
      name: "Pricing",
    },
    {
      link: "/about-us",
      name: "About Us",
    },
  ]

  return (
    <div>
      <div className={"relative"}>
        <div
          className={"relative z-20"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={"/menu.svg"} className="h-6 w-6" />
        </div>
        {isMenuOpen && <MobileMenu links={links} />}
      </div>
      <div className={"hidden md:block"}>
        <DesktopMenu links={links} />
      </div>
    </div>
  )
}

const MobileMenu = ({ links }) => {
  return (
    <div className={"fixed left-0 top-0 z-10 h-full w-full bg-neutral-200"}>
      <div
        className={
          "flex h-full w-full flex-col items-center justify-center gap-y-4 bg-opacity-90"
        }
      >
        {links.map((link) => {
          return (
            <a key={link.link} href={link.link}>
              {link.name}
            </a>
          )
        })}

        <a href={"/sign-in"}>Sign in</a>
        <a href={"/sign-up"}>Sign up</a>
      </div>
    </div>
  )
}

const DesktopMenu = ({ links }) => {}

const ThemeToggle = () => {}
