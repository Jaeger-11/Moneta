import { NotificationIcon } from "./Icons"

const Header = () => {
  return (
    <header className="p-2 md:px-4 border-b border-lightGray bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-dark">Welcome Back! Oluwadamilola</h1>

        <div className="flex gap-1 items-center">
            <div className="p-1.5 cursor-pointer bg-lightGray rounded-full [&_svg]:size-5">
              <NotificationIcon/>
            </div>
            <div>
              <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="profile" className="size-8 rounded-full"/>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header