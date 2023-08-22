import { CommentOutlined, CustomerServiceOutlined, FileTextOutlined, QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { FloatButton, Switch } from "antd";
import React, { useState } from "react";

const C01: React.FC = () => <FloatButton onClick={() => console.log('click')} />;

const C02: React.FC = () => (
  <>
    <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
    <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ right: 94 }} />
  </>
);

const C03: React.FC = () => (
  <>
    <FloatButton shape="circle" type="primary" style={{ right: 94 }} icon={<CustomerServiceOutlined />} />
    <FloatButton shape="square" type="primary" style={{ right: 24 }} icon={<CustomerServiceOutlined />} />
  </>
);

const C04: React.FC = () => (
  <>
    <FloatButton icon={<FileTextOutlined />} description="HELP INFO" shape="square" style={{ right: 24 }} />
    <FloatButton description="HELP INFO" shape="square" style={{ right: 94 }} />
    <FloatButton icon={<FileTextOutlined />} description="HELP" shape="square" style={{ right: 164 }} />
  </>
);

const C05: React.FC = () => <FloatButton tooltip={<div>Documents</div>} />;

const C06: React.FC = () => (
  <>
    <FloatButton.Group shape="circle" style={{ right: 24 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
    <FloatButton.Group shape="square" style={{ right: 94 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);

const C07: React.FC = () => (
  <>
  <FloatButton.Group trigger="click" type="primary" style={{right: 24}} icon={<CustomerServiceOutlined/>}>
    <FloatButton/>
    <FloatButton icon={<CommentOutlined/>}/>
  </FloatButton.Group>
  <FloatButton.Group trigger="hover" type="primary" style={{right: 94}} icon={<CustomerServiceOutlined/>}>
    <FloatButton/>
    <FloatButton icon={<CommentOutlined/>}/>
  </FloatButton.Group>
  </>
);

const C08: React.FC = () => {
  const [open, setOpen] = useState(true);
  const onChange = (checked: boolean) => {
    setOpen(checked);
  }
  return (
    <>
    <FloatButton.Group open={open} trigger="click" style={{right: 24}} icon={<CustomerServiceOutlined/>}>
      <FloatButton/>
      <FloatButton icon={<CommentOutlined/>}/>
    </FloatButton.Group>
    <Switch onChange={onChange} checked={open} style={{margin: 16}}/>
    </>
  );
};

const C09: React.FC = () => (
  <div style={{height: '500vh', padding: 10}}>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <FloatButton.BackTop/>
  </div>
);

const C10: React.FC = () => (
  <>
  <FloatButton shape="circle" badge={{dot: true}} style={{right: 24+70+70}}/>
  <FloatButton.Group shape="circle" style={{right: 24+70}}>
    <FloatButton tooltip={<div>custom badge color</div>} badge={{count:5, color: 'blue'}}/>
    <FloatButton badge={{count: 5}}/>
  </FloatButton.Group>
  <FloatButton.Group shape="circle">
    <FloatButton badge={{count: 12}} icon={<QuestionCircleOutlined/>}/>
    <FloatButton badge={{count: 123, overflowCount: 999}}/>
    <FloatButton.BackTop visibilityHeight={0}/>
  </FloatButton.Group>
  </>
);

export default {
  C01,
  C02,
  C03,
  C04,
  C05,
  C06,
  C07,
  C08,
  C09,
  C10,
};