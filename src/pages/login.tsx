import { useState } from "react";
import "./login.css";
import logo from "../assets/logo.svg";
import { Form, Input, Button, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "../helper/axios";
import { login } from "../api/auth";
import { AxiosError } from "axios";

function LoginPage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="bg-background content flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-24" />
        <h1 className=" text-2xl font-bold text-white mt-3">
          วารสารการส่งเสริมสุขภาพไทย
        </h1>
        <h2 className=" text-xl text-white">Thai Health Promotion Journal</h2>
        <Form
          onFinish={async (e) => {
            try {
              const token = await login(e);
              console.log(token);
              alert("Logged In");
              navigate("/", { replace: true });
            } catch (error) {
              if (axios.isAxiosError(error)) {
                alert(error.message);
              }
            }
          }}
          onFinishFailed={() => {
            console.log("sss");
          }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" className=" w-80" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-48 bg-orange border-0"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className=" text-white">
          In case you do not have an account, please{" "}
          <Link to={"/signup"}>Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
