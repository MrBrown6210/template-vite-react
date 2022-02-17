import { Outlet } from 'react-router-dom'
import floww from '@/assets/floww.svg'
export const AuthLayout = () => {
  return (
    <div>
      <div className="flex h-11 w-full justify-between bg-primary px-6 py-1">
        <div className="flex items-center px-2 py-1">
          <img src={floww} alt="floww" />
        </div>
        <div></div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
