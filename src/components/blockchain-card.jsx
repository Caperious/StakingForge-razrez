export const BlockchainCard = ({ blockchain = {} }) => {
  return (
    <>
      <div
        className={`flex flex-row md:flex-col px-4 py-5 justify-start gap-x-2 ${blockchain.card} md:justify-center lg:h-[260px] md:max-w-[260px] md:items-center gap-y-4`}
      >
        {/*Image*/}
        <div className={"flex flex-col justify-center md:items-center"}>
          <img src={blockchain.image} className={"md:h-12 md:w-12 h-10 w-10"} />
        </div>
        <div
          className={
            "flex flex-col mx-2 text-xs font-neutral-900 dark:text-neutral-100 md:items-center md:text-lg flex-grow md:flex-grow-0"
          }
        >
          {/*Title */}
          <p className={"text-[14px] md:text-[16px] font-bold leading-6"}>
            {blockchain.name}
          </p>
          {/*Description*/}
          <p className={"font-light text-xs md:text-base"}>
            {blockchain.description}
          </p>
          {/*Market cap mobile*/}
          <p className={"font-light text-xs md:hidden"}>
            Market cap:{" "}
            <span className={"font-bold"}>${blockchain.marketCap}</span>
          </p>
        </div>

        {/* Mobile Approx APR */}
        <div className={"flex flex-col justify-center md:hidden"}>
          <p className={`font-bold ${blockchain.percentageColor}`}>
            {blockchain.percentageLabel}
          </p>
          <p
            className={
              "text-xs md:text-sm text-neutral-700 text-right font-light dark:text-[#D5DBE8]"
            }
          >
            APR
          </p>
        </div>
        <div className={"flex flex-col justify-center md:hidden pl-2 md:pl-4"}>
          <img src={"/arrow-right.svg"} className={"h-4 w-4 dark:invert"} />
        </div>

        {/*  Table APR*/}
        <div
          className={
            "hidden md:flex flex-row divide-x justify-center items-center dark:border-[#DFDFDF}"
          }
        >
          <div
            className={
              "flex flex-col items-center px-4 justify-center flex-grow"
            }
          >
            <p className={"font-bold"}>${blockchain.marketCap}</p>
            <p className={"text-xs text-neutral-500 dark:text-[#858D9D]"}>
              Market Cap
            </p>
          </div>
          <div className={"flex flex-col items-center px-4 justify-center"}>
            <p className={`font-bold ${blockchain.percentageColor}`}>
              {blockchain.percentageLabel}
            </p>
            <p className={"text-xs text-neutral-500 dark:text-[#858D9D]"}>
              Approx. APR
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
