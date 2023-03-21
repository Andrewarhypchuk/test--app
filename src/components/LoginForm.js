import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import Error from "./Error";
import Notification from "./Notification";
import FormItem from "antd/es/form/FormItem";

function LoginForm() {
  const [errorLogin, setErrorLogin] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      email: "",
      password: "",
    });
  }, [form]);

  const handleFormSubmit = () => {
    form
      .validateFields()
      .then(() => {
        setErrorLogin(false);
      })
      .catch(() => {
        setErrorLogin(true);
      });
  };

  return (
    <div className="form__container">
      <div className="form__container_header">Login</div>
      <Form
        form={form}
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        layout="vertical"
      >
        <FormItem
          label={<label className="form__input_label">Email address</label>}
          name="username"
          
        >
          <Input className="form__input" placeholder="Email address" />
        </FormItem>

        <FormItem
          label={<label className="form__input_label">Password</label>}
          name="password"
          rules={[{ required: true, message: <Error field="Password" /> }]}
        >
          <Input.Password className="form__input" placeholder="Password" />
        </FormItem>
        <FormItem className="form__text">Forgot your password?</FormItem>
        <FormItem>
          <Button
            onClick={handleFormSubmit}
            className="submit__button"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </FormItem>
      </Form>
      <div className="info__container">
        <div className="info__container_header">
          Don't have an account with Cerve?
        </div>
        <div className="info__container_text">Contact us</div>
      </div>

      {errorLogin ? <Notification /> : <></>}
    </div>
  );
}

export default LoginForm;
