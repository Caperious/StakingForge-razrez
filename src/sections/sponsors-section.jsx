export const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Discord",
      logo: "/discord.svg",
    },
    {
      name: "Telegram",
      logo: "telegram.svg",
    },
    {
      name: "LinkedIn",
      logo: "linkedin.svg",
    },
    {
      name: "Twitter",
      logo: "twitter.svg",
    },
    {
      name: "Facebook",
      logo: "facebook.svg",
    },
  ]
  return (
    <div className={"flex flex-row justify-between py-10 container mx-auto"}>
      {sponsors.map((el) => (
        <div>
          <img src={el.logo} className={"h-8 filter-invert dark:filter-none"} />
        </div>
      ))}
    </div>
  )
}
