export const BlockchainCard = ({ blockchain = {} }) => {
  return (
    <>
      <div
        className={`flex flex-row sm:flex-col px-4 py-4 justify-start gap-x-2 ${blockchain.card} `}
      >
        {/*Image*/}
        <div className={"flex flex-col justify-center sm:items-center"}>
          <img src={blockchain.image} className={"h-10 w-10"} />
        </div>
        <div
          className={
            "flex flex-col mx-2 flex-grow text-xs font-neutral-900 sm:items-center sm:mt-6 sm:text-lg"
          }
        >
          {/*Title */}
          <p className={"text-[14px] sm:text-[16px] font-bold leading-4"}>
            {blockchain.name}
          </p>
          {/*Description*/}
          <p className={"font-light text-xs sm:text-base"}>
            {blockchain.description}
          </p>
          {/*Market cap mobile*/}
          <p className={"font-light text-xs sm:hidden"}>
            Market cap:{" "}
            <span className={"font-bold"}>${blockchain.marketCap}</span>
          </p>
        </div>

        {/* Mobile Approx APR */}
        <div className={"flex flex-col sm:justify-center sm:hidden"}>
          <p className={`font-bold ${blockchain.percentageColor}`}>
            {blockchain.percentageLabel}
          </p>
          <p
            className={
              "text-xs sm:text-sm text-neutral-700 text-right font-light"
            }
          >
            APR
          </p>
        </div>
        <div className={"flex flex-col justify-center sm:hidden pl-4"}>
          <img src={"/arrow-right.svg"} className={"h-4 w-4"} />
        </div>

        {/*  Table APR*/}
        <div
          className={
            "hidden sm:flex flex-row divide-x-2 gap-x-2 justify-center mt-3 items-center"
          }
        >
          <div
            className={
              "flex flex-col items-center p-2 justify-center flex-grow"
            }
          >
            <p className={"font-bold"}>${blockchain.marketCap}</p>
            <p className={"text-xs text-neutral-500 "}>Market Cap</p>
          </div>
          <div className={"flex flex-col items-center p-2 flex-grow"}>
            <p className={`font-bold ${blockchain.percentageColor}`}>
              {blockchain.percentageLabel}
            </p>
            <p className={"text-xs text-neutral-500 "}>Approx. APR</p>
          </div>
        </div>
      </div>
    </>
  )
}
