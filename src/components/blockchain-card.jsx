export const BlockchainCard = ({ blockchain = {} }) => {
  return (
    <>
      <div
        className={`flex flex-row px-4 py-4 justify-start gap-x-2 ${blockchain.card}`}
      >
        <div className={"flex flex-col justify-center"}>
          <img src={blockchain.image} className={"h-10 w-10"} />
        </div>
        <div
          className={"flex flex-col mx-2 flex-grow text-xs font-neutral-900"}
        >
          <p className={"text-[16px] font-bold"}>{blockchain.name}</p>
          <p className={"font-light text-xs"}>{blockchain.description}</p>
          <p className={"font-light text-xs"}>
            Market cap:{" "}
            <span className={"font-bold"}>${blockchain.marketCap}</span>
          </p>
        </div>
        <div className={"flex flex-col justify-center"}>
          <p className={`font-bold ${blockchain.percentageColor}`}>
            {blockchain.percentageLabel}
          </p>
          <p className={"text-sm text-neutral-700 text-right font-light"}>
            {blockchain.stakingType}
          </p>
        </div>
        <div className={"flex flex-col justify-center"}>
          <img src={"/arrow-right.svg"} className={"h-4 w-4"} />
        </div>
      </div>
    </>
  )
}
