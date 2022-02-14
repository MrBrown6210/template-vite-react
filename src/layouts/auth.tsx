import { Outlet } from 'react-router-dom'
import logo from '../assets/logo.svg'
export const AuthLayout = () => {
  return (
    <div>
      <div className="bg-nav w-full flex px-6 py-1 h-12 justify-between">
        <div className="flex gap-x-4">
          <img src={logo} alt="" />
          <div className="">
            <h1 className="text-white font-bold text-sm">วารสารการส่งเสริมสุขภาพไทย</h1>
            <h2 className="text-white text-xs">Thai Health Promotion Journal</h2>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
