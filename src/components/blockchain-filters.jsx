export const BlockchainFilters = () => {
  return (
    <div className={"flex flex-wrap gap-3"}>
      <Dropdown title={"All"} />
      <Dropdown title={"Sort by Market Cap"} />
      <FilterButton disabled title={"Cosmos ecosystem"} />
      <FilterButton disabled title={"0% fees"} />
      <FilterButton disabled={true} title={"Staking"} />
    </div>
  )
}

const Dropdown = ({ title, disabled }) => {
  return (
    <div
      className={`flex flex-row border-2 rounded px-4 py-2 border-neutral-700 dark:border-white gap-x-2 ${disabled ? "opacity-30" : ""}`}
    >
      <div>{title}</div>
      <img src={"/caret-down.svg"} />
    </div>
  )
}

const FilterButton = ({ title, disabled }) => {
  return (
    <div
      className={`flex flex-row border-2 rounded px-4 py-2 border-neutral-700 dark:border-white gap-x-2 ${disabled ? "opacity-30" : ""}`}
    >
      <div>{title}</div>
    </div>
  )
}
