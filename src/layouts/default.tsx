import { Outlet } from 'react-router-dom'
import { logout } from '../api/auth'
export const DefaultLayout = () => {
  return (
    <div>
      <div className="bg-nav flex h-12 w-full justify-between px-6 py-1">
        <div className="flex gap-x-4">
          <div className="">
            <h1 className="text-sm font-bold text-white">วารสารการส่งเสริมสุขภาพไทย</h1>
          </div>
        </div>
        <div></div>
      </div>
      <div className="content grid grid-cols-[250px_1fr]">
        <div className="col-span-1" onClick={logout}>
          test
        </div>
        <div className="overflow-scroll">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
