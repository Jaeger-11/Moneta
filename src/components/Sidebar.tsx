import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { LoansIcon, LogoutIcon, OverviewIcon, SettingsIcon, TransactionIcon } from "./Icons";

const Sidebar = () => {
    const pathname = useLocation().pathname;
    const [minimize, setMinimize] = useState<Boolean>(false);
    const toggleSidebar = () => {
        setMinimize((minimize) => !minimize);
    }

    const navcontents = [
        {
          name: "transaction",
          path: "/transaction",
          icon: <TransactionIcon/>,
        },
        {
          name: "loans",
          path: "/loans",
          icon: <LoansIcon/>,
        },
    ]

    return (
        <aside className={` h-svh text-lg border-r border-lightGray bg-white sidebar transition-all ${minimize ? 'minimize' : 'min-w-48 flex flex-col justify-between'} `}>
            <div>
            <div className="p-2">
                <p className="text-lg font-semibold font-lato px-1 text-primaryDeep">Moneta</p>
            </div>

            <section className="w-full flex flex-col gap-4 capitalize py-4 md:py-6 text-base border-b pr-2 border-lightGray">
                <Link to={'/'} className={`${pathname === '/' ? 'bg-primaryDeep text-white svgactive' : 'hover:bg-lightGray hover:text-primaryLight'} px-4 py-2 navicon font-medium flex items-center gap-2  text-darkGray transition-all duration-300 ease-in-out [&_svg]:size-5 `}>
                    <OverviewIcon/>
                    Overview
                </Link>
                {navcontents.map((item) => {
                    return (
                        <Link to={item.path} className={`${pathname.startsWith(item.path) ? 'bg-primaryDeep text-white svgactive' : 'hover:bg-lightGray hover:text-primaryLight'} px-4 py-2 navicon font-medium flex items-center gap-2  text-darkGray transition-all duration-300 ease-in-out [&_svg]:size-5 `} key={item.name}>
                            {item.icon}
                            {item.name}
                        </Link>
                    )
                })}
            </section>
            </div>
            

            <section className="py-4 text-base font-medium flex flex-col gap-4 border-t border-lightGray">
                <Link to='/settings' className="px-4 py-2 flex items-center gap-2 hover:bg-lightGray text-darkGray transition-all duration-300 ease-in-out [&_svg]:size-4">
                    <SettingsIcon/>
                    Settings
                </Link>

                <Link to='/logout' className="px-4 py-2 flex items-center gap-2 hover:bg-lightGray text-darkGray transition-all duration-300 ease-in-out [&_svg]:size-4">
                    <LogoutIcon/>
                    Logout
                </Link>
            </section>
        </aside>
    )
}

export default Sidebar