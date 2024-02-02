import { Divider } from "../components/divider"
import { Button } from "../components/button"

export const NewsSection = () => {
  const news = [
    {
      title: "May 19, 2023",
      description:
        "Exciting milestone!🥁 A 36,000th node just launched on our Allnodes platform, and this time it's an Ethereum node. Congratulations to the node owner who will be rewarded...",
    },
    {
      title: "May 19, 2023",
      description:
        "Blast off with Allnodes! We now directly support conversion of Ethereum validator to Rocket Pool 8 or 16 ETH minipools. Get higher APR with minipools projected to yield up to 42%...",
    },
    {
      title: "May 19, 2023",
      description:
        "PublicNode has reached a significant milestone, handling 500 million requests in the past 24 hours across endpoints for 11 blockchains! Thank you to our community for...",
    },
  ]
  return (
    <div className={"py-6"}>
      <div className={" flex flex-col mx-8 "}>
        <h2 className={"text-center my-16 sm:text-4xl sm:mt-24"}>
          {" "}
          StakingForge News
        </h2>
        <div>
          {news.map((el) => {
            return <NewsCard news={el} key={el.description} />
          })}
        </div>
      </div>
      <div className={"flex justify-center my-6 sm:my-12 xl:mb-32"}>
        <button
          type="button"
          className="border-gradient-secondary rounded-full py-3 px-6 font-bold flex items-center gap-x-2 transition-all duration-300 ease-in-out tracking-10 hover:bg-gradient-secondary text-sm text-neutral-700 sm:text-lg sm:px-8 sm:py-4 sm:tracking-10"
        >
          Show more
          <img src={"/down-arrow.svg"} className={"h-4"} />{" "}
        </button>
      </div>
    </div>
  )
}

const NewsCard = ({ news }) => {
  return (
    <>
      <div className={"my-8 sm:flex flex-row gap-x-6"}>
        <div
          className={
            "bg-neutral-300 rounded-2xl h-48 w-full mt-8 mb-10 sm:mt-0 xl:max-w-sm"
          }
        ></div>
        <div className={"sm:max-w-sm md:max-w-full"}>
          <div className={"font-bold font-termina my-2 sm:text-xl"}>
            {news.title}
          </div>
          <p>{news.description}</p>
        </div>
      </div>
      <hr className={"bg-neutral-300 h-[2px]"} />
    </>
  )
}
