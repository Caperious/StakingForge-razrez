export const Button = ({ label = "Button", onClick = () => {} }) => {
  return (
    <button
      type="button"
      className="border-gradient-primary-secondary rounded-full py-3 px-6 font-bold flex items-center gap-x-2 transition-all duration-300 ease-in-out tracking-10  text-sm dark:text-neutral-100 text-neutral-700 sm:text-lg sm:px-8 sm:py-4 sm:tracking-10 hover:bg-primary-secondary-dark"
      onClick={onClick}
    >
      {label}
      <img src={"/down-arrow.svg"} className={"h-4 dark:invert"} />{" "}
    </button>
  )
}
