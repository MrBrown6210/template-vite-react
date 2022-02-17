import { useState } from 'react'
import logo from '../assets/logo.svg'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../helper/axios'
import { login } from '../api/auth'

function LoginPage() {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<string>()

  return (
    <div className="relative grid h-[calc(100vh_-_44px)] grid-cols-[3fr__1fr]">
      <div>
        <img src="https://i.morioh.com/210422/3bf0c8a4.webp" alt="cover app" className="h-full" />
      </div>
      <div className="flex justify-center py-2 px-8">
        <div>
          <h1 className=" my-14 text-center text-2xl font-bold">เข้าสู่ระบบ</h1>
          <div className="text-center text-red-500">{errorMessage}</div>
          <div className="mt-5">
            <Form
              data-testid="form"
              onFinish={async (e) => {
                try {
                  setErrorMessage(undefined)
                  await login(e)
                  navigate('/', { replace: true })
                } catch (error) {
                  if (axios.isAxiosError(error)) {
                    setErrorMessage(error.response?.data.message)
                  }
                }
              }}
            >
              <Form.Item
                labelCol={{ span: 24 }}
                label={<div className=" text-base font-semibold">เบอร์โทรศัพท์</div>}
                name="phone"
                rules={[{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' }]}
              >
                <Input placeholder="0123456789" data-testid="phone" className="" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button
                  data-testid="submit-button"
                  type="primary"
                  htmlType="submit"
                  className=" w-full border-0 bg-primary text-sm font-semibold"
                >
                  เข้าสู่ระบบ
                </Button>
              </Form.Item>
            </Form>
            <Link to={''} className="inline-block w-full text-center text-primary">
              ลืมรหัสผ่าน
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
