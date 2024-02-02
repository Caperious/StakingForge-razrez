import React, { useEffect, createContext, useState } from "react"

const ThemeContext = createContext()

const getTheme = () => {
  const theme = localStorage.getItem("theme")
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", "light")
    return "dark"
  } else {
    return theme
  }
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme)

  function toggleTheme(themeInput) {
    setTheme(themeInput)
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme)
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    refreshTheme()
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
