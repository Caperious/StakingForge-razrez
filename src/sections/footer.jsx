import { Logo } from "../components/logo"

export const Footer = () => {
  return (
    <div>
      <div className={"flex flex-row my-32 justify-between font-light"}>
        <div className={"flex flex-col gap-y-6 justify-start items-start"}>
          <Logo />
          <p className={"max-w-sm"}>
          StakingForge - guides you in your investments in crypto assets. Take part in this new revolution.
          </p>

          <div className={"flex flex-row gap-x-4"}>
            <img src={"/email.svg"} />
            <a href={"mailto:kubera@stakingforge.io"}>kubera@stakingforge.io</a>
          </div>
          <div className={"flex flex-row gap-x-4"}>
            <img src={"/phone.svg"} />
            <a href={"tel:+1234567890"}>+ 12 3456 7890</a>
          </div>
        </div>

        {/* <div>
          <div className={"font-bold tracking-10 text-lg mb-6"}>Services</div>
          <div className={"flex flex-col gap-y-4 tracking-wide"}>
            <a href={"#"}>Webhosting</a>
            <a href={"#"}>Domains</a>
            <a href={"#"}>Premium hosting</a>
            <a href={"#"}>Private server</a>
            <a href={"#"}>E-mail Hosting</a>
          </div>
        </div>

        <div>
          <div className={"font-bold tracking-10 text-lg mb-6"}>Support</div>
          <div className={"flex flex-col gap-y-4 tracking-wide"}>
            <a href={"#"}>Pricing plan</a>
            <a href={"#"}>Documentation</a>
            <a href={"#"}>Guider</a>
            <a href={"#"}>Tutorial</a>
          </div>
        </div>

        <div>
          <div className={"font-bold tracking-10 text-lg mb-6"}>Company</div>
          <div className={"flex flex-col gap-y-4 tracking-wide"}>
            <a href={"#"}>About</a>
            <a href={"#"}>Blog</a>
            <a href={"#"}>Join Us</a>
            <a href={"#"}>Press</a>
            <a href={"#"}>Partners</a>
          </div>
        </div>

        <div>
          <div className={"font-bold tracking-10 text-lg mb-6"}>Legal</div>
          <div className={"flex flex-col gap-y-4 tracking-wide"}>
            <a href={"#"}>Claim</a>
            <a href={"#"}>Privacy</a>
            <a href={"#"}>Terms</a>
          </div>
        </div> */}
      </div>

      <hr className={"border-neutral-800 my-10 "} />
      <div className={"flex flex-row justify-center my-10"}>
        © StakingForge 2024. All right reserved
      </div>
    </div>
  )
}
