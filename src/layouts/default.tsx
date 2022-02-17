import { Outlet } from 'react-router-dom'
import { logout } from '../api/auth'
import floww from '@/assets/floww.svg'
import logo from '@/assets/logo.svg'
import { Divider, Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import SubMenu from 'antd/lib/menu/SubMenu'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
export const DefaultLayout = () => {
  return (
    <div>
      <div className="flex h-11 w-full justify-between bg-primary px-6 py-1">
        <div className="flex items-center px-2 py-1">
          <div className="">
            <img src={floww} alt="floww logo" />
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="grid h-[100vh_-_44px] grid-cols-[250px_1fr]">
        <div className="col-span-1 overflow-scroll bg-sidebar" onClick={logout}>
          <Sider width={'100%'} className=" bg-sidebar">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              className="mt-3 bg-sidebar"
            >
              <Menu.Item key="dashboard">Dashboard</Menu.Item>
              <Menu.Item key="tasks">รายการใบงาน</Menu.Item>
              <Menu.Item key="quotations">ใบเสนอราคา</Menu.Item>
              <Menu.Item key="warranties">การรับประกัน</Menu.Item>
              <Divider className="bg-[#878c8e]"></Divider>
              <Menu.Item key="customers">ลูกค้า</Menu.Item>
              <Menu.Item key="cars">รถยนต์</Menu.Item>
              <Divider className="bg-[#878c8e]"></Divider>
              <Menu.Item key="employees">พนักงาน</Menu.Item>
              <Divider className="bg-[#878c8e]"></Divider>
              <SubMenu key="default-data" icon={<UserOutlined />} title="ข้อมูลต้นแบบ">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="settings" icon={<LaptopOutlined />} title="กำหนดค่างาน">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </div>
        <div className="overflow-scroll">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
