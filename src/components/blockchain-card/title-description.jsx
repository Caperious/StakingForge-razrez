import { Category } from "./category.jsx"

export const TitleDescriptionComponent = ({ name, description, marketCap, category }) => {
  return (
    <div
      className={
        "flex flex-col mx-2 text-xs font-neutral-900 dark:text-neutral-100 md:items-center md:text-lg flex-grow md:flex-grow-0 md:text-center"
      }
    >
      <p className={"text-[14px] md:text-[16px] font-bold leading-6"}>
        {name}
      </p>
      <p className={"font-light text-xs md:text-base"}>{description}</p>
      <p className={"font-light text-xs md:hidden"}>
        Market cap: <span className={"font-bold"}>${marketCap}</span>
      </p>
      <div className={'mt-0.5 md:hidden'}>
          <Category category={category} />
      </div>
    </div>
  );
};