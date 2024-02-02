import { FC, HTMLProps } from "react"

export const Logo = (props) => {
  return (
    <>
      <img
        src={"/logo.svg"}
        {...props}
        className={"h-4 sm:h-6 xl:h-8 dark:hidden"}
      />
      <img
        src={"/logo-dark.svg"}
        {...props}
        className={"h-4 sm:h-6 xl:h-8 hidden dark:inline-block"}
      />
    </>
  )
}
