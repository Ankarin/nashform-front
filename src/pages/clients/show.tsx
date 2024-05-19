import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const ClientsShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"First Name"}</Title>
      <TextField value={record?.first_name} />

      <Title level={5}>{"Last Name"}</Title>
      <TextField value={record?.last_name} />

      <Title level={5}>{"Email"}</Title>
      <TextField value={record?.email} />

      <Title level={5}>{"Phone Number"}</Title>
      <TextField value={record?.phone_number} />

      <Title level={5}>{"Birthday"}</Title>
      <TextField value={record?.birthday} />

      <Title level={5}>{"Gender"}</Title>
      <TextField value={record?.gender} />

      <Title level={5}>{"Comment"}</Title>
      <TextField value={record?.comment} />
    </Show>
  );
};
