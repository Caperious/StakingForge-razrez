import { Divider } from "../components/divider"
import { Button } from "../components/button"

export const HeroSection = () => {
  return (
    <>
      <div className={"px-6 pt-16 sm:pt-20 max-w-5xl"}>
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

        <p
          className={
            "mt-10 mb-4 sm:mb-10 text-lg text-gray-900 dark:text-white sm:max-w-lg lg:max-w-xl"
          }
        >
          With Staking Forge, you can earn crypto and invest in Gold directly from your wallet in a few clicks.
          Our project makes it easy to get started with staking, with a simple and secure platform.
        </p>

        <div className={"lg:hidden"}>
          <Button label={"Discover blockchains"}></Button>
        </div>
        <div className={"hidden lg:flex"}>
          <Button
            size={"large"}
            label={"Discover supported blockchains"}
          ></Button>
        </div>
      </div>
      <div
        className={
          "w-full relative sm:-mt-24 lg:justify-end lg:items-center lg:flex object-fill pointer-events-none select-none -z-10"
        }
      >
        <img
          src={"/hero-graphics-desktop-dark.svg"}
          className={
            "hidden lg:block w-full md:-mt-[50px] lg:-mt-[125px] lg:-mb-[75px] xl:-mt-[300px] xl:-mb-[100px] 2xl:-mt-[400px] 2xl:-mb-[150px] pointer-events-none -z-10"
          }
        />
        <img
          src={"/hero-graphics.svg"}
          className={
            "w-full md:-mt-[200px] md:-mb-[200px] -mt-[110px] -mb-[110px] lg:hidden -z-10 pointer-events-none"
          }
        />
      </div>
    </>
  )
}
