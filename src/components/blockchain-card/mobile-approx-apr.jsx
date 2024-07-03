export const MobileApproxAPRComponent = ({ percentageColor, percentageLabel }) => {
  return (
    <div className={"flex flex-col justify-center md:hidden text-right w-[82px]"}>
      <p
        className={`font-bold text-sm ${percentageColor}`}
        dangerouslySetInnerHTML={
          !percentageLabel ? { __html: "N/A" } : { __html: percentageLabel }
        }
      ></p>
      <p
        className={
          "text-xs md:text-sm text-neutral-700 text-right font-light dark:text-[#D5DBE8]"
        }
      >
        APR
      </p>
    </div>
  );
};