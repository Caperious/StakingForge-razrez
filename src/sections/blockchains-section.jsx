import { BlockchainCard } from "../components/blockchain-card"
import { Button } from "../components/button"
import { BlockchainFilters } from "../components/blockchain-filters"

export const BlockchainsSection = () => {
  const blockchains = [
    {
      image: "/midasx.svg",
      name: "MidasX Ouro",
      description: "Staking, Validator Nodes",
      marketCap: "2.5M",
      stakingType: "APR",
      percentageLabel: "75 - 100%",
      percentageColor: "text-[#71C9A5]",
      card: "card-gold",
    },
    {
      image: "/multiverse.svg",
      name: "MultiverseX eGLD",
      description: "Staking, Validator Nodes",
      marketCap: "1.53B",
      stakingType: "APR",
      percentageLabel: "8.5 - 10%",
      percentageColor: "text-[#71C9A5]",
      card: "card-green",
    },
    {
      image: "/spx.svg",
      name: "Solar SPX",
      description: "Staking",
      marketCap: "200M",
      stakingType: "APR",
      percentageLabel: "25 - 40%",
      percentageColor: "text-[#71C9A5]",
      card: "card-red",
    },
    {
      image: "/ethereum.png",
      name: "Ethereum ETH",
      description: "Staking, Validator Nodes",
      marketCap: "314.3B",
      stakingType: "APR",
      percentageLabel: "3.2%",
      percentageColor: "text-[#71C9A5]",
      card: "card-blue",
    },
    {
      image: "https://www.gitbook.com/cdn-cgi/image/width=36,dpr=2,height=36,fit=contain,format=auto/https%3A%2F%2F4122358061-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FhE4weeNpCJSNUXnecN1R%252Ficon%252FIhHPLpW7N7dB59PIZfmM%252Ficon%2520transparent%2520256w.png%3Falt%3Dmedia%26token%3D3f656b6f-c557-4f82-ae23-f610a870c0ab",
      name: "XAI",
      description: "Validator Nodes",
      marketCap: "300M",
      stakingType: "APR",
      percentageLabel: "100 - 350%",
      percentageColor: "text-[#71C9A5]",
      card: "card-red",
    },
    {
      image: "https://pbs.twimg.com/profile_images/1753381946908876800/U57ZjRaU_400x400.jpg",
      name: "OneFinity",
      description: "Validator Nodes, Staking",
      marketCap: "1.4M",
      stakingType: "APR",
      percentageLabel: "7.10%",
      percentageColor: "text-[#71C9A5]",
      card: "card-purple",
    },
    {
      image: "https://cryptologos.cc/logos/dydx-dydx-logo.svg?v=029",
      name: "Shardeum",
      description: "Staking, Validator Nodes",
      marketCap: "2M",
      stakingType: "APR",
      percentageLabel: "15%",
      percentageColor: "text-[#71C9A5]",
      card: "card-dark",
    },
    // {
    //   image: "/celestia.png",
    //   name: "Celestia TIA",
    //   description: "Staking, Validator Nodes",
    //   marketCap: "4.71B",
    //   stakingType: "APR",
    //   percentageLabel: "15.2%",
    //   percentageColor: "text-[#71C9A5]",
    //   card: "card-purple",
    // },
    // {
    //   image: "https://cryptologos.cc/logos/injective-inj-logo.svg?v=029",
    //   name: "Injective INJ",
    //   description: "Staking, Validator Nodes",
    //   marketCap: "4.71B",
    //   stakingType: "APR",
    //   percentageLabel: "14.5%",
    //   percentageColor: "text-[#71C9A5]",
    //   card: "card-blue",
    // },
    // {
    //   image: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=029",
    //   name: "Polkadot DOT",
    //   description: "Staking, Validator Nodes",
    //   marketCap: "4.71B",
    //   stakingType: "APR",
    //   percentageLabel: "15.25%",
    //   percentageColor: "text-[#71C9A5]",
    //   card: "card-red",
    // },
    // {
    //   image: "https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=029",
    //   name: "Cosmos ATOM",
    //   description: "Staking, Validator Nodes",
    //   marketCap: "4.71B",
    //   stakingType: "APR",
    //   percentageLabel: "13.5%",
    //   percentageColor: "text-[#71C9A5]",
    //   card: "card-dark",
    // },
    // {
    //   image: "https://cryptologos.cc/logos/kava-kava-logo.svg?v=029",
    //   name: "Kava KAVA",
    //   description: "Staking, Validator Nodes",
    //   marketCap: "4.71B",
    //   stakingType: "APR",
    //   percentageLabel: "19.00%",
    //   percentageColor: "text-[#71C9A5]",
    //   card: "card-red",
    // },
    // {
    //   image: "https://cryptologos.cc/logos/aave-aave-logo.svg?v=029",
    //   name: "Aave AAVE",
    //   description: "Staking, Validator Nodes",
    //   marketCap: "4.71B",
    //   stakingType: "APR",
    //   percentageLabel: "4.82%",
    //   percentageColor: "text-[#71C9A5]",
    //   card: "card-green",
    // },
    // {
    //   image: "/bake.png",
    //   name: "Bake. BAKE",
    //   description: "Staking, Validator Nodes",
    //   marketCap: "4.71B",
    //   stakingType: "APR",
    //   percentageLabel: "20%",
    //   percentageColor: "text-[#71C9A5]",
    //   card: "card-yellow",
    // },
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

      {/*<div className={"hidden sm:flex mt-10 mb-6"}>*/}
      {/*  <BlockchainFilters />*/}
      {/*</div>*/}

      <div className={"flex flex-wrap gap-3 mt-8 justify-center"}>
        {blockchains.map((blockchain) => (
          <BlockchainCard blockchain={blockchain} />
        ))}
      </div>

      {/*<div className={"flex flex-row justify-center my-10 lg:my-20"}>*/}
      {/*  <div className={"flex flex-col gap-y-5 items-center text-sm"}>*/}
      {/*    <p>*/}
      {/*      Showing <b>1-25</b> of <b>91 total</b>*/}
      {/*    </p>*/}
      {/*    <Button label={"Show More Blockchains"}></Button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}
