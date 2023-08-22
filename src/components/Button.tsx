import React, { useState } from "react";
import { Button, Space, Tooltip, Radio, Divider } from "antd";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import type { SizeType } from "antd/es/config-provider/SizeContext";

const Button01: React.FC = () => (
  <Space>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

const Button02: React.FC = () => (
  <Space direction="vertical">
    <Space wrap>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined/>}></Button>
      </Tooltip>
      <Button type="primary" shape="circle">A</Button>
      <Button type="primary" icon={<SearchOutlined/>}>Search</Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined/>}></Button>
      </Tooltip>
      <Button icon={<SearchOutlined/>}>Search</Button>
    </Space>
    <Space wrap>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined/>}></Button>
      </Tooltip>
      <Button icon={<SearchOutlined/>}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined/>}></Button>
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined/>}>Search</Button>
      <Button icon={<SearchOutlined/>} href="https://www.google.com"></Button>
    </Space>
  </Space>
);

const Button03: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');
  return (
    <>
    <Radio.Group value={size} onChange={(e)=>setSize(e.target.value)}>
      <Radio.Button value="large">Large</Radio.Button>
      <Radio.Button value="default">Default</Radio.Button>
      <Radio.Button value="small">Small</Radio.Button>
    </Radio.Group>
    <Divider orientation="left">Preview</Divider>
    <Space direction="vertical">
      <Space wrap>
        <Button type="primary">Primary</Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>Dashed</Button>
      </Space>
      <Button type="link" size={size}>Link</Button>
      <Space wrap>
        <Button type="primary" icon={<DownloadOutlined/>} size={size}></Button>
        <Button type="primary" shape="circle" icon={<DownloadOutlined/>} size={size}></Button>
        <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={size}></Button>
        <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={size}>Download</Button>
        <Button type="primary" icon={<DownloadOutlined/>} size={size}>Download</Button>
      </Space>
    </Space>
    </>
  )
};

export {
  Button01,
  Button02,
  Button03,
}