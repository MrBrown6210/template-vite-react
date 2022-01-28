import { Outlet } from "react-router-dom";
import { logout } from "../api/auth";
export const DefaultLayout = () => {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <div className="col-span-1" onClick={logout}>
        test
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
