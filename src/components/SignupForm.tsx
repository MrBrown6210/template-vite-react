import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useEffect } from "react";

interface IProp {
  onFinish?: (values: any) => void;
  onFinishFailed?: (values: any) => void;
}

export const SignupForm: React.FC<IProp> = ({ onFinish, onFinishFailed }) => {
  useEffect(() => {}, []);
  return (
    <Form
      data-testid="form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        labelCol={{ span: 24 }}
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" data-testid="email" className=" w-full" />
      </Form.Item>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              data-testid="password"
              className=" w-full"
            />
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
            <Input.Password
              data-testid="confirm-password"
              placeholder="Confirm Password"
            />
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
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" data-testid="name" className=" w-full" />
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
            <Input data-testid="last-name" placeholder="Last name" />
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
        <Input data-testid="organization" placeholder="Organization" />
      </Form.Item>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label="Country"
            labelCol={{ span: 24 }}
            name="country"
            rules={[{ required: true, message: "Please input your country!" }]}
          >
            <Input
              data-testid="country"
              placeholder="Country"
              className=" w-full"
            />
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
            <Input data-testid="phone" placeholder="Phone" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="is_agree_collect_data" valuePropName="checked">
        <Checkbox data-testid="is_agree_collect_data">
          I agree to have my data collected and stored accroding to the privacy
          statement
        </Checkbox>
      </Form.Item>

      <Form.Item name="need_notify_review_update" valuePropName="checked">
        <Checkbox data-testid="need_notify_review_update">
          I would like to be notified of submission review updates.
        </Checkbox>
      </Form.Item>

      <Form.Item name="need_contact_to_review" valuePropName="checked">
        <Checkbox data-testid="need_contact_to_review">
          I would like to be contacted with requests to review submissions to
          this journal.
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
        <Button
          data-testid="submit-button"
          type="primary"
          htmlType="submit"
          className="w-48 bg-orange border-0"
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
