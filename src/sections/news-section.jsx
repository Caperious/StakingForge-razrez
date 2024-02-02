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
    <div className={"bg-neutral-100 py-6"}>
      <div className={" flex flex-col mx-8 "}>
        <h2 className={"text-center my-16"}> StakingForge News</h2>
        <div>
          {news.map((el) => {
            return <NewsCard news={el} key={el.description} />
          })}
        </div>
      </div>
      <div className={"flex justify-center my-6"}>
        <Button label={"Show more"} />
      </div>
    </div>
  )
}

const NewsCard = ({ news }) => {
  return (
    <>
      <div className={"my-8"}>
        <div
          className={"bg-neutral-300 rounded-2xl h-56 w-full mt-8 mb-10"}
        ></div>
        <div className={"font-bold font-termina my-2"}>{news.title}</div>
        <p>{news.description}</p>
      </div>
      <hr className={"bg-neutral-300 h-[2px]"} />
    </>
  )
}
