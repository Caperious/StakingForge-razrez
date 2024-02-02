import { BlockchainCard } from "../components/blockchain-card"
import { Button } from "../components/button"

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
      image: "https://cryptologos.cc/logos/cronos-cro-logo.svg?v=029",
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
  ]

  return (
    <div className="mt-10 px-6">
      <h2>Supported blockchains</h2>
      <p className={"text-neutral-700 my-5"}>
        Choose an asset to Stake, Host or Monitor to get started
      </p>

      <div className={"flex flex-col flex-wrap gap-y-3"}>
        {blockchains.map((blockchain) => (
          <BlockchainCard blockchain={blockchain} />
        ))}
      </div>

      <div className={"flex flex-row justify-center my-10"}>
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
