import React, { useContext, useState } from "react"
import "./App.css"
import { Header } from "./sections/header.jsx"
import { HeroSection } from "./sections/hero-section.jsx"
import { Divider } from "./components/divider"
import { BlockchainsSection } from "./sections/blockchains-section"
import { FeaturesSection } from "./sections/features-section"
import { NewsSection } from "./sections/news-section"
import { SponsorsSection } from "./sections/sponsors-section"
import { Footer } from "./sections/footer"

function App() {
  return (
    <>
      <div className={`mx-auto container`}>
        <Header />
        <HeroSection />
        <BlockchainsSection />
        <div className={"my-4"}>
          <Divider />
        </div>
        <FeaturesSection />
      </div>
      <div className={"bg-neutral-100 dark:text-neutral-700"}>
        <div className={"mx-auto container"}>
          <NewsSection />
        </div>
      </div>
      <div className={"hidden lg:flex bg-neutral-50 dark:bg-neutral-900"}>
        <SponsorsSection />
      </div>
      <div className={"mx-auto container hidden lg:block"}>
        <Footer />
      </div>
    </>
  )
}

export default App
