import { useContext, useState } from "react"
import { ThemeContext } from "../../theme"

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
      link: "/newsroom",
      name: "Newsroom",
    },
    {
      link: "/about-us",
      name: "About Us",
    },
  ]

  return (
    <div>
      <div className={"sm:hidden relative"}>
        <div
          className={"relative z-20"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={"/menu.svg"} className="h-6 w-6 dark:invert" />
        </div>
        {isMenuOpen && <MobileMenu links={links} />}
      </div>
      <div className={"hidden sm:block"}>
        <DesktopMenu links={links} />
      </div>
    </div>
  )
}

const MobileMenu = ({ links }) => {
  return (
    <div
      className={
        "fixed left-0 top-0 z-10 h-full w-full bg-neutral-200 dark:bg-neutral-800"
      }
    >
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

        <AccountLinks />
      </div>
    </div>
  )
}

const DesktopMenu = ({ links }) => {
  return (
    <div
      className={
        "flex flex-row xl:gap-x-8 gap-x-4 align-baseline justify-center items-center font-bold"
      }
    >
      {links.map((link) => {
        return (
          <a
            key={link.link}
            href={link.link}
            className={"hidden lg:inline-block"}
          >
            {link.name}
          </a>
        )
      })}
      <ThemeToggle />
      <AccountLinks />
    </div>
  )
}

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={"flex-row gap-x-3 hidden lg:flex cursor-pointer z-10"}>
      <button onClick={() => toggleTheme("dark")}>
        <img
          src={
            theme === "dark" ? "/dark-theme-dark.svg" : "/light-theme-dark.svg"
          }
        />
      </button>
      <button onClick={() => toggleTheme("light")}>
        <img
          src={
            theme === "dark"
              ? "/dark-theme-light.svg"
              : "/light-theme-light.svg"
          }
        />
      </button>
    </div>
  )
}

const AccountLinks = () => {
  return (
    <>
      <a href={"/sign-in"}>Sign in</a>
      <a
        className={
          "border-2 rounded-full border-neutral-900 dark:border-white px-6 py-2"
        }
        href={"/sign-up"}
      >
        Sign up
      </a>
    </>
  )
}
