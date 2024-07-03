export const TableAPRComponent = ({ marketCap, percentageColor, percentageLabel }) => {
  return (
    <div
      className={
        "hidden md:flex flex-row divide-x justify-center items-center dark:border-[#DFDFDF]"
      }
    >
      <div
        className={
          "flex flex-col items-center px-2 justify-center flex-grow text-center"
        }
      >
        <p className={"font-bold"}>${marketCap}</p>
        <p className={"text-xs text-neutral-500 dark:text-[#858D9D]"}>
          Market Cap
        </p>
      </div>
      <div
        className={"flex flex-col items-center px-2 justify-center text-center"}
      >
        <p
          className={`font-bold ${percentageColor}`}
          dangerouslySetInnerHTML={
            !percentageLabel ? { __html: "TBD" } : { __html: percentageLabel }
          }
        ></p>
        <p className={"text-xs text-neutral-500 dark:text-[#858D9D]"}>
          Approx. APR
        </p>
      </div>
    </div>
  );
};