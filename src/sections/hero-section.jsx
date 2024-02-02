import { Divider } from "../components/divider"
import { Button } from "../components/button"

export const HeroSection = () => {
  return (
    <>
      <div className={"px-6 pt-16 sm:pt-20"}>
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

        <p className={"mt-10 mb-4 sm:mb-10 text-lg text-gray-900 sm:max-w-lg"}>
          {" "}
          With Staking Forge, you can earn rewards just by holding coins in your
          wallet.{" "}
          <span className={"hidden sm:inline"}>
            Our project makes it easy to get started with staking, with a simple
            and secure platform
          </span>
        </p>

        <Button label={"Discover blockchains"}></Button>
      </div>
      <div className={"w-full relative sm:-mt-24"}>
        <img
          src={"/hero-graphics.svg"}
          className={
            "w-full object-cover -top-[150px] sm:-top-[200px] lg:-top-[200px] z-0"
          }
        />
      </div>
    </>
  )
}
