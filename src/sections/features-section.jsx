export const FeaturesSection = () => {
  const features = [
    {
      title: "Masternodes & Validator Nodes",
      icon: "/feature-1.svg",
    },
    {
      title: "Sentry Nodes",
      icon: "/feature-2.svg",
    },
    {
      title: "Full Nodes",
      icon: "/feature-3.svg",
    },
    {
      title: "Staking",
      icon: "/feature-4.svg",
    },
    {
      title: "Address monitoring",
      icon: "/feature-5.svg",
    },
    {
      title: "Allnodes Bot",
      icon: "/feature-6.svg",
    },
  ]

  return (
    <div className={"flex flex-col mx-6 justify-center my-16 text-center"}>
      <h2>StackingForge features</h2>
      <div className={"grid grid-cols-2 gap-y-14 mt-16"}>
        {features.map((feature, index) => (
          <Feaure key={index} title={feature.title} icon={feature.icon} />
        ))}
      </div>
    </div>
  )
}

const Feaure = ({ title, icon }) => {
  return (
    <div className={"flex flex-col gap-y-2 text-neutral-700 text-center"}>
      <img src={icon} className={"h-12"} />
      <p className={"font-bold font-xl font-termina"}>{title}</p>
    </div>
  )
}
