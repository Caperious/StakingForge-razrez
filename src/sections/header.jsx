import { Logo } from "../components/logo"
import { Menu } from "../components/menu/menu"

export const Header = () => {
  return (
    <div className="py-6 flex flex-row items-center justify-between px-6">
      <Logo />
      <Menu />
    </div>
  )
}
