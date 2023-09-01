import { DownloadOutlined, EllipsisOutlined, LeftOutlined, MinusOutlined, PlusOutlined, RightOutlined, SearchOutlined, SmileOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import type { RadioChangeEvent, TourProps, UploadFile } from 'antd';
import {
  Upload,
  Tour,
  Input,
  Form,
  QRCode,
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Space,
  Table,
  theme,
  TimePicker,
  Transfer,
  Image,
  InputNumber,
  Divider,
  Tree,
  Row,
  Col,
  Cascader,
  Switch,
  TreeSelect,
  Steps,
  Rate,
  Badge,
  Tabs,
  Card,
  ColorPicker,
} from 'antd';
import { HappyProvider } from '@ant-design/happy-work-theme';
import type { Locale } from 'antd/es/locale';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import "./ConfigProvider.css";

dayjs.locale('en');

const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [{ text: 'filter1', value: 'filter1' }],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
const Page: React.FC = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const tourRefs = React.useRef<HTMLElement[]>([]);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  };
  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  };
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => tourRefs.current[0],
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => tourRefs.current[1],
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => tourRefs.current[2],
    },
  ];
  const fileList: UploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'error',
    },
  ];
  return (
    <Space
      direction="vertical"
      size={[0, 16]}
      style={{ width: '100%', paddingTop: 16, borderTop: `1px solid ${token.colorBorder}` }}
    >
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <Space wrap>
        <Select showSearch style={{ width: 200 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker />
      </Space>
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Show Modal
        </Button>
        <Button onClick={info}>Show info</Button>
        <Button onClick={confirm}>Show confirm</Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </Space>
      <Transfer dataSource={[]} showSearch targetKeys={[]} />
      <div style={{ width: 320, border: `1px solid ${token.colorBorder}`, borderRadius: 8 }}>
        <Calendar fullscreen={false} value={dayjs()} />
      </div>
      <Form name="basic" autoComplete="off" labelCol={{ sm: { span: 4 } }} wrapperCol={{ span: 6 }}>
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input width={200} />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ type: 'number', min: 0, max: 99 }]}
          initialValue={100}
        >
          <InputNumber width={200} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={[]} columns={columns} />
      <Modal title="Locale Modal" open={open} onCancel={hideModal}>
        <p>Locale Modal</p>
      </Modal>
      <Space wrap size={80}>
        <QRCode
          value="https://ant.design/"
          status="expired"
          onRefresh={() => console.log('refresh')}
        />
        <Image
          width={160}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Space>
      <Upload listType="picture-card" fileList={fileList} />
      <Divider orientation="left">Tour</Divider>
      <Button type="primary" onClick={() => setTourOpen(true)}>
        Begin Tour
      </Button>
      <Space>
        <Button ref={(node) => node && tourRefs.current.splice(0, 0, node)}> Upload</Button>
        <Button ref={(node) => node && tourRefs.current.splice(1, 0, node)} type="primary">
          Save
        </Button>
        <Button
          ref={(node) => node && tourRefs.current.splice(2, 0, node)}
          icon={<EllipsisOutlined />}
        />
      </Space>
      <Tour open={tourOpen} steps={steps} onClose={() => setTourOpen(false)} />
    </Space>
  );
};
export const Locale_: React.FC = () => {
  const [locale, setLocal] = useState<Locale>(enUS);
  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 16 }}>Change locale of components:</span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            中文
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page />
      </ConfigProvider>
    </>
  );
};

import type { DirectionType } from 'antd/es/config-provider';
import { Color } from 'antd/es/color-picker';
const InputGroup = Input.Group;
const ButtonGroup = Button.Group;
const { TreeNode } = Tree;
const { Search } = Input;
const cascaderOptions = [
  {
    value: 'tehran',
    label: 'تهران',
    children: [
      {
        value: 'tehran-c',
        label: 'تهران',
        children: [
          {
            value: 'saadat-abad',
            label: 'سعادت آیاد',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: 'اردبیل',
    children: [
      {
        value: 'ardabil-c',
        label: 'اردبیل',
        children: [
          {
            value: 'primadar',
            label: 'پیرمادر',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: 'گیلان',
    children: [
      {
        value: 'rasht',
        label: 'رشت',
        children: [
          {
            value: 'district-3',
            label: 'منطقه ۳',
          },
        ],
      },
    ],
  },
];
type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
const Page1: React.FC<{ popupPlacement: Placement }> = ({ popupPlacement }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(5);
  const [showBadge, setShowBadge] = useState(true);
  const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  // ==== Cascader ====
  const cascaderFilter = (inputValue: string, path: { label: string }[]) =>
    path.some((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  const onCascaderChange = (value: any) => {
    console.log(value);
  };
  // ==== End Cascader ====
  // ==== Modal ====
  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setModalOpen(false);
  };
  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setModalOpen(false);
  };
  // ==== End Modal ====
  const onStepsChange = (newCurrentStep: number) => {
    console.log('onChange:', newCurrentStep);
    setCurrentStep(newCurrentStep);
  };
  // ==== Badge ====
  const increaseBadge = () => {
    setBadgeCount(badgeCount + 1);
  };
  const declineBadge = () => {
    setBadgeCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };
  const onChangeBadge = (checked: boolean) => {
    setShowBadge(checked);
  };
  // ==== End Badge ====
  return (
    <div className="direction-components">
      <Row>
        <Col span={24}>
          <Divider orientation="left">Cascader example</Divider>
          <Cascader
            suffixIcon={<SearchOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="یک مورد انتخاب کنید"
            popupPlacement={popupPlacement}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;With search:&nbsp;&nbsp;
          <Cascader
            suffixIcon={<SmileOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="Select an item"
            popupPlacement={popupPlacement}
            showSearch={{ filter: cascaderFilter }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Switch example</Divider>
          &nbsp;&nbsp;
          <Switch defaultChecked />
          &nbsp;&nbsp;
          <Switch loading defaultChecked />
          &nbsp;&nbsp;
          <Switch size="small" loading />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Radio Group example</Divider>
          <Radio.Group defaultValue="c" buttonStyle="solid">
            <Radio.Button value="a">تهران</Radio.Button>
            <Radio.Button value="b" disabled>
              اصفهان
            </Radio.Button>
            <Radio.Button value="c">فارس</Radio.Button>
            <Radio.Button value="d">خوزستان</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Button example</Divider>
          <div className="button-demo">
            <Button type="primary" icon={<DownloadOutlined />} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
            <br />
            <Button.Group>
              <Button type="primary">
                <LeftOutlined />
                Backward
              </Button>
              <Button type="primary">
                Forward
                <RightOutlined />
              </Button>
            </Button.Group>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Divider orientation="left">Tree example</Divider>
          <Tree
            showLine
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0" disabled>
                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                <TreeNode title="leaf" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode title={<span style={{ color: '#1677ff' }}>sss</span>} key="0-0-1-0" />
              </TreeNode>
            </TreeNode>
          </Tree>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Input (Input Group) example</Divider>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
          <br />
          <InputGroup compact>
            <Input style={{ width: '20%' }} defaultValue="0571" />
            <Input style={{ width: '30%' }} defaultValue="26888888" />
          </InputGroup>
          <br />
          <InputGroup compact>
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input style={{ width: '50%' }} defaultValue="input content" />
            <InputNumber />
          </InputGroup>
          <br />
          <Search placeholder="input search text" enterButton="Search" size="large" />
          <br />
          <br />
          <div style={{ marginBottom: 16 }}>
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
          </div>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Select example</Divider>
              <Space wrap>
                <Select mode="multiple" defaultValue="مورچه" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="مورچه">مورچه</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select defaultValue="مورچه" style={{ width: 120 }} disabled>
                  <Option value="مورچه">مورچه</Option>
                </Select>
                <Select defaultValue="مورچه" style={{ width: 120 }} loading>
                  <Option value="مورچه">مورچه</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option?.props.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="سعید">سعید</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Space>
            </Col>
            <Col span={12}>
              <Divider orientation="left">TreeSelect example</Divider>
              <TreeSelect
                showSearch
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
              >
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="parent 1-0" key="0-1-1">
                    <TreeNode title="my leaf" key="random" />
                    <TreeNode title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="random2">
                    <TreeNode title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Modal example</Divider>
              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal title="پنچره ساده" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>نگاشته‌های خود را اینجا قراردهید</p>
                <p>نگاشته‌های خود را اینجا قراردهید</p>
                <p>نگاشته‌های خود را اینجا قراردهید</p>
              </Modal>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Steps example</Divider>
              <Steps
                progressDot
                current={currentStep}
                items={[
                  {
                    title: 'Finished',
                    description: 'This is a description.',
                  },
                  {
                    title: 'In Progress',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Waiting',
                    description: 'This is a description.',
                  },
                ]}
              />
              <br />
              <Steps
                current={currentStep}
                onChange={onStepsChange}
                items={[
                  {
                    title: 'Step 1',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Step 2',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Step 3',
                    description: 'This is a description.',
                  },
                ]}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Rate example</Divider>
              <Rate defaultValue={2.5} />
              <br />
              <strong>* Note:</strong> Half star not implemented in RTL direction, it will be
              supported after <a href="https://github.com/react-component/rate">rc-rate</a>{' '}
              implement rtl support.
            </Col>
            <Col span={12}>
              <Divider orientation="left">Badge example</Divider>
              <Badge count={badgeCount}>
                <a href="#" className="head-example" />
              </Badge>
              <ButtonGroup>
                <Button onClick={declineBadge}>
                  <MinusOutlined />
                </Button>
                <Button onClick={increaseBadge}>
                  <PlusOutlined />
                </Button>
              </ButtonGroup>
              <div style={{ marginTop: 12 }}>
                <Badge dot={showBadge}>
                  <a href="#" className="head-example" />
                </Badge>
                <Switch onChange={onChangeBadge} checked={showBadge} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Pagination example</Divider>
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Grid System example</Divider>
          <div className="grid-demo">
            <div className="code-box-demo">
              <p>
                <strong>* Note:</strong> Every calculation in RTL grid system is from right side
                (offset, push, etc.)
              </p>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                  col-8
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  col-12 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={18} push={6}>
                  col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                  col-6 col-pull-18
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export const Direction: React.FC = () => {
  const [direction, setDirection] = useState<DirectionType>('ltr');
  const [popupPlacement, setPopupPlacement] = useState<Placement>('bottomLeft');
  const changeDirection = (e: RadioChangeEvent) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
    if (directionValue === 'rtl') {
      setPopupPlacement('bottomRight');
    } else {
      setPopupPlacement('bottomLeft');
    }
  };
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 16 }}>Change direction of components:</span>
        <Radio.Group defaultValue="ltr" onChange={changeDirection}>
          <Radio.Button key="ltr" value="ltr">
            LTR
          </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider direction={direction}>
        <Page1 popupPlacement={popupPlacement} />
      </ConfigProvider>
    </>
  );
};

const { TabPane } = Tabs;
export const ComponentSize: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');
  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <Space size={[0, 16]} style={{ width: '100%' }} direction="vertical">
          <Input />
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          <Input.Search allowClear />
          <Input.TextArea allowClear />
          <Select defaultValue="demo" options={[{ value: 'demo' }]} />
          <DatePicker />
          <DatePicker.RangePicker />
          <Button>Button</Button>
          <Card title="Card">
            <Table
              columns={[
                { title: 'Name', dataIndex: 'name' },
                { title: 'Age', dataIndex: 'age' },
              ]}
              dataSource={[
                { key: '1', name: 'John Brown', age: 32 },
                { key: '2', name: 'Jim Green', age: 42 },
                { key: '3', name: 'Joe Black', age: 32 },
              ]}
            />
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
  Button?: {
    colorPrimary: string;
    algorithm?: boolean;
  };
};
const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
  Button: {
    colorPrimary: '#00B96B',
  },
};
export const Theme = () => {
  const [form] = Form.useForm();
  const [data, setData] = React.useState<ThemeData>(defaultData);
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: data.colorPrimary,
            borderRadius: data.borderRadius,
          },
          components: {
            Button: {
              colorPrimary: data.Button?.colorPrimary,
              algorithm: data.Button?.algorithm,
            },
          },
        }}
      >
        <Space>
          <Input />
          <Button type="primary">Button</Button>
        </Space>
      </ConfigProvider>
      <Divider />
      <Form
        form={form}
        onValuesChange={(_, allValues) => {
          setData({
            ...allValues,
          });
        }}
        name="theme"
        initialValues={defaultData}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item
          name="colorPrimary"
          label="Primary Color"
          trigger="onChangeComplete"
          getValueFromEvent={(color: Color) => color.toHexString()}
        >
          <ColorPicker />
        </Form.Item>
        <Form.Item name="borderRadius" label="Border Radius">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Button">
          <Form.Item name={['Button', 'algorithm']} valuePropName="checked" label="algorithm">
            <Switch />
          </Form.Item>
          <Form.Item
            name={['Button', 'colorPrimary']}
            label="Primary Color"
            trigger="onChangeComplete"
            getValueFromEvent={(color: Color) => color.toHexString()}
          >
            <ColorPicker />
          </Form.Item>
        </Form.Item>
        <Form.Item name="submit" wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

type WaveConfig = NonNullable<Parameters<typeof ConfigProvider>[0]['wave']>;
// Prepare effect holder
const createHolder = (node: HTMLElement) => {
  const { borderWidth } = getComputedStyle(node);
  const borderWidthNum = parseInt(borderWidth, 10);
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.inset = `-${borderWidthNum}px`;
  div.style.borderRadius = 'inherit';
  div.style.background = 'transparent';
  div.style.zIndex = '999';
  div.style.pointerEvents = 'none';
  div.style.overflow = 'hidden';
  node.appendChild(div);
  return div;
};
const createDot = (
  holder: HTMLElement,
  color: string,
  left: number,
  top: number,
  size: number = 0,
) => {
  const dot = document.createElement('div');
  dot.style.position = 'absolute';
  dot.style.left = `${left}px`;
  dot.style.top = `${top}px`;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.borderRadius = '50%';
  dot.style.background = color;
  dot.style.transform = 'translate(-50%, -50%)';
  dot.style.transition = `all 1s ease-out`;
  holder.appendChild(dot);
  return dot;
};
// Inset Effect
const showInsetEffect: WaveConfig['showEffect'] = (node, { event, component }) => {
  if (component !== 'Button') {
    return;
  }
  const holder = createHolder(node);
  const rect = holder.getBoundingClientRect();
  const left = event.clientX - rect.left;
  const top = event.clientY - rect.top;
  const dot = createDot(holder, 'rgba(255, 255, 255, 0.65)', left, top);
  // Motion
  requestAnimationFrame(() => {
    dot.ontransitionend = () => {
      holder.parentElement?.removeChild(holder);
    };
    dot.style.width = '200px';
    dot.style.height = '200px';
    dot.style.opacity = '0';
  });
};
// Shake Effect
const showShakeEffect: WaveConfig['showEffect'] = (node, { component }) => {
  if (component !== 'Button') {
    return;
  }
  const seq = [0, -15, 15, -5, 5, 0];
  const itv = 10;
  let steps = 0;
  function loop() {
    cancelAnimationFrame((node as any).effectTimeout);
    (node as any).effectTimeout = requestAnimationFrame(() => {
      const currentStep = Math.floor(steps / itv);
      const current = seq[currentStep];
      const next = seq[currentStep + 1];
      if (!next) {
        node.style.transform = '';
        node.style.transition = '';
        return;
      }
      // Trans from current to next by itv
      const angle = current + ((next - current) / itv) * (steps % itv);
      node.style.transform = `rotate(${angle}deg)`;
      node.style.transition = 'none';
      steps += 1;
      loop();
    });
  }
  loop();
};
// Component
const Wrapper = ({ name, ...wave }: WaveConfig & { name: string }) => (
  <ConfigProvider wave={wave}>
    <Button type="primary">{name}</Button>
  </ConfigProvider>
);
export const CustomWave = () => (
  <Space style={{ padding: 24 }} size="large">
    <Wrapper name="Disabled" disabled />
    <Wrapper name="Default" />
    <Wrapper name="Inset" showEffect={showInsetEffect} />
    <Wrapper name="Shake" showEffect={showShakeEffect} />
    <HappyProvider>
      <Button type="primary">Happy Work</Button>
    </HappyProvider>
  </Space>
);

export default [
  {
    label: "ConfigProvider - Locale",
    children: React.createElement(Locale_),
  },
  {
    label: "ConfigProvider - Direction",
    children: React.createElement(Direction),
  },
  {
    label: "ConfigProvider - Component size",
    children: React.createElement(ComponentSize),
  },
  {
    label: "ConfigProvider - Theme",
    children: React.createElement(Theme),
  },
  {
    label: "ConfigProvider - Custom Wave",
    children: React.createElement(CustomWave),
  },
]