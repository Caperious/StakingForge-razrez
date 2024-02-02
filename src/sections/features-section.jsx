export const FeaturesSection = () => {
  const features = [
    {
      title: "Masternodes & Validator Nodes",
      icon: "/feature-1.svg",
      description:
        "Setup in minutes and earn attractive rewards directly to your wallet when you host on StakingForge. ",
    },
    {
      title: "Sentry Nodes",
      icon: "/feature-2.svg",
      description:
        "Secure your Validator node. Requesting data is unavailable. Carries no reward.",
    },
    {
      title: "Full Nodes",
      icon: "/feature-3.svg",
      description:
        "The fastest and easiest setup for blockchain Full Nodes with unlimited, complimentary updates and maximum uptime.",
    },
    {
      title: "Staking",
      icon: "/feature-4.svg",
      description:
        "Collect interest on assets available on our site while keeping your coin in your wallet.",
    },
    {
      title: "Address monitoring",
      icon: "/feature-5.svg",
      description:
        "Monitor your masternode and staking rewards of any address from the available list of coins on our site.",
    },
    {
      title: "Allnodes Bot",
      icon: "/feature-6.svg",
      description:
        "Get ongoing updates on your node performance through Telegram, Discord and Slack.",
    },
  ]

  return (
    <div className={"flex flex-col mx-6 justify-center my-16 text-center"}>
      <h2>StackingForge features</h2>
      <div className={"grid grid-cols-2 gap-y-14 mt-16"}>
        {features.map((feature, index) => (
          <Feaure key={index} feature={feature} />
        ))}
      </div>
    </div>
  )
}

const Feaure = ({ feature: { title, icon, description } }) => {
  return (
    <div
      className={
        "flex flex-col gap-y-2 text-neutral-700 text-center sm:items-center"
      }
    >
      <img src={icon} className={"h-12 sm:h-24"} />
      <p
        className={
          "font-bold text-xl font-termina sm:text-xl sm:my-4 sm:max-w-72"
        }
      >
        {title}
      </p>
      <p className={"hidden sm:flex max-w-64"}>{description}</p>
    </div>
  )
}
