import Logo from '@/components/dist/Logo'
import { IoList } from "react-icons/io5";
import { DiGithubFull } from "react-icons/di";
import { IoMdChatbubbles } from "react-icons/io";

export default function Page(){
  return (
    <div className="navbar bg-base-100 border-b h-24  px-6 z-[999] fixed">
  <div className="navbar-start">
      <div className="dropdown block md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <IoList className="h-6 w-6"/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
      <Logo className="btn btn-ghost relative md:l-3"/>
  </div>
  <div className="navbar-center hidden md:block">
    <a className="btn btn-ghost normal-case text-xl">Home</a>
    <a className="btn btn-ghost normal-case text-xl">About</a>
    <a className="btn btn-ghost normal-case text-xl">Contact</a>
  </div>
  <div className="navbar-end gap-x-2">
    <label tabIndex={2} className="btn btn-ghost btn-circle hidden md:flex justify-center items-center">
      <IoMdChatbubbles className=" w-5 h-5" />
    </label>
    <input type="button" tabIndex={2} className="hidden md:block"/>
    <label tabIndex={1} className="btn btn-ghost">
      <DiGithubFull className="w-10 h-10"/>
    </label>
    <input type="button" tabIndex={1}/>
  </div>
</div>
  )
}