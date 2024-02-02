import { BlockchainCard } from "../components/blockchain-card"
import { Button } from "../components/button"
import { BlockchainFilters } from "../components/blockchain-filters"

export const BlockchainsSection = () => {
  const blockchains = [
    {
      image: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=029",
      name: "Avalanche",
      description: "Staking, Validator Nodes",
      marketCap: "4.71B",
      stakingType: "APR",
      percentageLabel: "16%",
      percentageColor: "text-[#71C9A5]",
      card: "card-red",
    },
    {
      image: "https://coinando.com/static/assets/coins/terra-luna-logo.png",
      name: "Terra Classic",
      description: "Staking",
      marketCap: "4.71B",
      stakingType: "APR",
      percentageLabel: "5%",
      percentageColor: "text-[#71C9A5]",
      card: "card-yellow",
    },
    {
      image: "/cronos.svg",
      name: "Cronos",
      description: "Staking, Validator Nodes",
      marketCap: "4.71B",
      stakingType: "APR",
      percentageLabel: "3-4%",
      percentageColor: "text-[#71C9A5]",
      card: "card-dark",
    },
    {
      image: "https://cryptologos.cc/logos/dash-dash-logo.svg?v=029",
      name: "Dash",
      description: "Validator Nodes",
      marketCap: "4.71B",
      stakingType: "APR",
      percentageLabel: "8-12%",
      percentageColor: "text-[#71C9A5]",
      card: "card-blue",
    },
    {
      image: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=029",
      name: "Polkadot",
      description: "Staking",
      marketCap: "4.71B",
      stakingType: "APR",
      percentageLabel: "3%",
      percentageColor: "text-[#71C9A5]",
      card: "card-red",
    },
    {
      image: "https://cryptologos.cc/logos/aave-aave-logo.svg?v=029",
      name: "Aave AAVE",
      description: "Staking, Validator Nodes",
      marketCap: "4.71B",
      stakingType: "APR",
      percentageLabel: "6.7-8%",
      percentageColor: "text-[#71C9A5]",
      card: "card-green",
    },
  ]

  return (
    <div className="mt-10 px-6">
      <h2>Supported blockchains</h2>
      <p
        className={
          "text-neutral-700 my-3 sm:text-lg text-sm max-w-52 sm:max-w-full mb-10 sm:mb-0 dark:text-white"
        }
      >
        Choose an asset to Stake, Host or Monitor to get started
      </p>

      <div className={"hidden sm:flex mt-10 mb-6"}>
        <BlockchainFilters />
      </div>

      <div
        className={
          "grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-5"
        }
      >
        {blockchains.map((blockchain) => (
          <BlockchainCard blockchain={blockchain} />
        ))}
        {blockchains.map((blockchain) => (
          <BlockchainCard blockchain={blockchain} />
        ))}
        {blockchains.map((blockchain) => (
          <BlockchainCard blockchain={blockchain} />
        ))}
      </div>

      <div className={"flex flex-row justify-center my-10 lg:my-20"}>
        <div className={"flex flex-col gap-y-5 items-center text-sm"}>
          <p>
            Showing <b>1-25</b> of <b>91 total</b>
          </p>
          <Button label={"Show More Blockchains"}></Button>
        </div>
      </div>
    </div>
  )
}
