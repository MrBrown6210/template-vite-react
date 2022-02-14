import { Outlet } from 'react-router-dom'
import { logout } from '../api/auth'
export const DefaultLayout = () => {
  return (
    <div>
      <div className="bg-nav w-full flex px-6 py-1 h-12 justify-between">
        <div className="flex gap-x-4">
          <div className="">
            <h1 className="text-white font-bold text-sm">วารสารการส่งเสริมสุขภาพไทย</h1>
          </div>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-[250px_1fr] content">
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
