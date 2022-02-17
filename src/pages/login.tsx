import { useState } from 'react'
import logo from '../assets/logo.svg'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../helper/axios'
import { login } from '../api/auth'

function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="relative grid h-[calc(100vh_-_44px)] grid-cols-[4fr__1fr]">
      <div>
        <img src="https://i.morioh.com/210422/3bf0c8a4.webp" alt="cover app" className="h-full" />
      </div>
      <div className="flex justify-center p-2">
        <div>
          <h1 className="text-center text-2xl font-semibold">เข้าสู่ระบบ</h1>
          <div className="mt-5">
            <Form>
              <Form.Item
                labelCol={{ span: 24 }}
                label="เบอร์โทรศัพท์"
                name="phone"
                rules={[{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' }]}
              >
                <Input placeholder="0123456789" data-testid="phone" className="" />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
