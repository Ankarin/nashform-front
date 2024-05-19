import { Create, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker, Select } from "antd";

export const ClientsCreate = () => {
  const { formProps, saveButtonProps, formLoading } = useForm({});

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[
            {
              required: true,
              message: "First Name is required",
            },
            {
              max: 255,
              message: "Max length is 255 characters",
            },
          ]}
        >
          <Input placeholder="Enter First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[
            {
              required: true,
              message: "First Name is required",
            },
            {
              max: 255,
              message: "Max length is 255 characters",
            },
          ]}
        >
          <Input placeholder="Enter Last Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Email is required",
            },
            {
              max: 255,
              message: "Max length is 255 characters",
            },
            {
              type: "email",
              message: "The is not valid E-mail!",
            },
          ]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[
            {
              max: 50,
              message: "Max length is 50 characters",
            },
            {
              pattern:
                /^(\+\d{1,2}\s?)1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
              message:
                "Please enter a valid phone number starting with a '+' sign",
            },
          ]}
        >
          <Input placeholder="Enter Phone Number" />
        </Form.Item>
        <Form.Item label="Birthday" name="birthday">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Select placeholder="Select Gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Comment"
          name="comment"
          rules={[
            {
              max: 3000,
              message: "Max length is 3000 characters",
            },
          ]}
        >
          <Input.TextArea placeholder="Enter Comment" />
        </Form.Item>
      </Form>
    </Create>
  );
};
