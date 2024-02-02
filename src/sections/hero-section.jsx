import { Divider } from "../components/divider"
import { Button } from "../components/button"

export const HeroSection = () => {
  return (
    <>
      <div className={"px-6 pt-20"}>
        <h1 className={"sm:hidden"}>
          The{" "}
          <span className={"gradient-tricolor bg-clip-text text-transparent"}>
            next gen
          </span>{" "}
          staking
        </h1>
        <h1>
          <h1 className={"hidden sm:inline-block"}>
            Meet the{" "}
            <span className={"gradient-tricolor bg-clip-text text-transparent"}>
              next gen
            </span>{" "}
            staking
          </h1>
        </h1>

        <p className={"mt-10 mb-4 text-lg text-gray-900"}>
          {" "}
          With Staking Forge, you can earn rewards just by holding coins in your
          wallet.{" "}
          <span className={"hidden sm:inline"}>
            Our project makes it easy to get started with staking, with a simple
            and secure platform
          </span>
        </p>

        <Button label={"Discover Blockchains"}>Discover blockchains</Button>
      </div>
      <div className={"w-full relative"}>
        <img
          src={"/hero-graphics.svg"}
          className={
            "w-full object-cover md:w-2/3  right-0 -top-[150px] md:-top-[200px] lg:-top-[200px] z-0"
          }
        />
      </div>
    </>
  )
}
