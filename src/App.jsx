import React, { useState } from "react"
import "./App.css"
import { Header } from "./sections/header.jsx"
import { HeroSection } from "./sections/hero-section.jsx"
import { Divider } from "./components/divider"
import { BlockchainsSection } from "./sections/blockchains-section"
import { FeaturesSection } from "./sections/features-section"
import { NewsSection } from "./sections/news-section"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={"min-h-full pb-20"}>
        <Header />
        <HeroSection />
        <BlockchainsSection />
        <div className={"my-4"}>
          <Divider />
        </div>
        <FeaturesSection />
        <NewsSection />
      </div>
    </>
  )
}

export default App
