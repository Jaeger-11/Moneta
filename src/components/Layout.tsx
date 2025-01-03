import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex h-svh overflow-hidden bg-white font-inter text-base">
      <aside className="">
        <Sidebar/>
      </aside>
      <div className="flex-1 flex h-screen flex-col bg-light">
        <Header/>
        <div className="flex-1 flex flex-col"><Outlet/></div>
      </div>
    </div>
  )
}

export default Layout