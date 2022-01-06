import { useState } from "react";
import "./login.css";
import logo from "../assets/logo.svg";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "../helper/axios";
import { login, signup } from "../api/auth";
import { AxiosError } from "axios";

const SignupPage = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="content px-16 pt-5">
      <div className=" flex">
        <Link to={"/login"}>Register / Login</Link>
        <div>/</div>
        <p>Create a New Account</p>
      </div>
      <div className=" flex justify-between">
        <div>arrow</div>
        <h1>Create a New Account</h1>
        <div></div>
      </div>
      <div className="h-[2px] bg-gray-50"></div>
      <div className="flex justify-center">
        <div className="pt-5 w-3/6">
          <Form
            onFinish={async (e) => {
              try {
                await signup(e);
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
              labelCol={{ span: 24 }}
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" className=" w-full" />
            </Form.Item>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="Password" className=" w-full" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="comfirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
              </Col>
            </Row>

            <div className="flex items-center">
              <h2 className="text-base">Your Information</h2>
              <div className="h-[2px] flex-grow bg-gray-100"></div>
            </div>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  labelCol={{ span: 24 }}
                  name="firstName"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Name" className=" w-full" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last name"
                  labelCol={{ span: 24 }}
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input placeholder="Last name" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Organization"
              name="organization"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: false,
                  message: "Please input your Organization!",
                },
              ]}
            >
              <Input placeholder="Organization" />
            </Form.Item>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Country"
                  labelCol={{ span: 24 }}
                  name="country"
                  rules={[
                    { required: true, message: "Please input your country!" },
                  ]}
                >
                  <Input placeholder="Country" className=" w-full" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phone No."
                  labelCol={{ span: 24 }}
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone!",
                    },
                  ]}
                >
                  <Input placeholder="Phone" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="is_agree_collect_data" valuePropName="checked">
              <Checkbox>
                I agree to have my data collected and stored accroding to the
                privacy statement
              </Checkbox>
            </Form.Item>

            <Form.Item name="need_notify_review_update" valuePropName="checked">
              <Checkbox>
                I would like to be notified of submission review updates.
              </Checkbox>
            </Form.Item>

            <Form.Item name="need_contact_to_review" valuePropName="checked">
              <Checkbox>
                I would like to be contacted with requests to review submissions
                to this journal.
              </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="w-48 bg-orange border-0"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
