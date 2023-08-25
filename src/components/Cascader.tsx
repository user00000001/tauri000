import React, { useState } from "react";
import {
  Cascader, Divider, Radio, RadioChangeEvent, Space,
} from "antd";
import {
  type DefaultOptionType
} from "antd/es/cascader";

interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value: (string | number)[]) => {
  console.log(value);
};
export const Cascader01: React.FC = () => (
  <Cascader options={options} onChange={onChange} placeholder="Please select" />
);

export const Cascader02: React.FC = () => (
  <Cascader options={options} defaultValue={['zhejiang', 'hangzhou', 'xihu']} onChange={onChange} placeholder="Please select" />
);

export const Cascader03: React.FC = () => {
  const [text, setText] = useState('Unselect');
  const onChange = (_: (string | number)[], selectedOptions: Option[]) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
  };
  return (
    <span>
      {text}
      &nbsp;
      <Cascader options={options} onChange={onChange}>
        <a href="#">Change city</a>
      </Cascader>
    </span>
  );
};

const displayRender = (labels: string[]) => labels[labels.length - 1];
export const Cascader04: React.FC = () => (
  <Cascader
    options={options}
    expandTrigger="hover"
    displayRender={displayRender}
    onChange={onChange}
  />
);

export const Cascader05: React.FC = () => <Cascader options={options} onChange={onChange} />

export const Cascader06: React.FC = () => <Cascader options={options} onChange={onChange} changeOnSelect />;

interface Option1 {
  value: string | number;
  label: string;
  children?: Option1[];
  disableCheckbox?: boolean;
}
const options1: Option1[] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
const onChange1 = (value: (string | number)[][]) => {
  console.log(value);
};
export const Cascader07: React.FC = () => (
  <Cascader
    style={{ width: '100%' }}
    options={options1}
    onChange={onChange1}
    multiple
    maxTagCount="responsive"
  />
);

const { SHOW_CHILD } = Cascader;
export const Cascader08: React.FC = () => {
  const onChange = (value: (string | number)[][]) => {
    console.log(value);
  };
  return (
    <>
      <Cascader
        style={{ width: '100%' }}
        options={options1}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ['bamboo', 'little', 'fish'],
          ['bamboo', 'little', 'cards'],
          ['bamboo', 'little', 'bird'],
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{ width: '100%' }}
        options={options1}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={['bamboo']}
      />
    </>
  );
};

export const Cascader09: React.FC = () => (<>
  <Cascader size="large" options={options} onChange={onChange} />
  <br />
  <br />
  <Cascader options={options} onChange={onChange} />
  <br />
  <br />
  <Cascader size="small" options={options} onChange={onChange} />
  <br />
  <br />
</>);

interface Option2 {
  value: string;
  label: string;
  children?: Option2[];
  code?: number;
}
const options2: Option2[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            code: 752100,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400,
          },
        ],
      },
    ],
  },
];
const handleAreaClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  label: (string | number),
  option: DefaultOptionType,
) => {
  e.stopPropagation();
  console.log('clicked', label, option);
};
const displayRender1 = (labels: (string | number)[], selectedOptions: DefaultOptionType[] | undefined) =>
  labels.map((label, i) => {
    if (selectedOptions === undefined) return;
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (<a onClick={(e) => handleAreaClick(e, label, option)}>{option.code}</a>)
        </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });
export const Cascader10: React.FC = () => (
  <Cascader
    options={options2}
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    displayRender={displayRender1}
    style={{ width: '100%' }}
  />
);

const onChange2 = (value: (string | number)[], selectedOptions: Option[]) => {
  console.log(value, selectedOptions);
};
const filter = (inputValue: string, path: DefaultOptionType[]) =>
  path.some(
    (option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
  );
export const Cascader11: React.FC = () => (
  <Cascader
    options={options}
    onChange={onChange2}
    placeholder="Please select"
    showSearch={{ filter }}
    onSearch={(value) => console.log(value)}
  />
);

interface Option3 {
  value?: string | number | null;
  label: React.ReactNode;
  children?: Option3[];
  isLeaf?: boolean;
}
const optionLists: Option3[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];
export const Cascader12: React.FC = () => {
  const [options, setOptions] = useState<Option3[]>(optionLists);
  const onChange = (value: (string | number)[], selectedOptions: Option3[]) => {
    console.log(value, selectedOptions);
  };
  const loadData = (selectedOptions: Option3[]) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    // load options lazily
    setTimeout(() => {
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };
  return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
};

interface Option4 {
  code: string;
  name: string;
  items?: Option4[];
}
const options3: Option4[] = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export const Cascader13: React.FC = () => (
  <Cascader
    fieldNames={{ label: 'name', value: 'code', children: 'items' }}
    options={options3}
    onChange={onChange}
    placeholder="Please select"
  />
);

interface Option5 {
  value: string;
  label: string;
  children?: Option5[];
}
const options4: Option5[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const dropdownRender = (menus: React.ReactNode) => (
  <div>
    {menus}
    <Divider style={{ margin: 0 }} />
    <div style={{ padding: 8 }}>The footer is not very short.</div>
  </div>
);
export const Cascader14: React.FC = () => (
  <Cascader options={options4} dropdownRender={dropdownRender} placeholder="Please select" />
);

export const Cascader15: React.FC = () => {
  const [placement, SetPlacement] = useState<'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'>(
    'topLeft',
  );
  const placementChange = (e: RadioChangeEvent) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Cascader options={options} placeholder="Please select" placement={placement} />
    </>
  );
};

export const Cascader16: React.FC = () => (
  <Space direction="vertical">
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
);

export default [
  {
    label: "Cascader - Basic",
    children: React.createElement(Cascader01),
  },
  {
    label: "Cascader - Default value",
    children: React.createElement(Cascader02),
  },
  {
    label: "Cascader - Custom trigger",
    children: React.createElement(Cascader03),
  },
  {
    label: "Cascader - Hover",
    children: React.createElement(Cascader04),
  },
  {
    label: "Cascader - Disabled option",
    children: React.createElement(Cascader05),
  },
  {
    label: "Cascader - Change on select",
    children: React.createElement(Cascader06),
  },
  {
    label: "Cascader - Multiple",
    children: React.createElement(Cascader07),
  },
  {
    label: "Cascader - ShowCheckedStrategy",
    children: React.createElement(Cascader08),
  },
  {
    label: "Cascader - Size",
    children: React.createElement(Cascader09),
  },
  {
    label: "Cascader - Custem render",
    children: React.createElement(Cascader10),
  },
  {
    label: "Cascader - Search",
    children: React.createElement(Cascader11),
  },
  {
    label: "Cascader - Load Options lazily",
    children: React.createElement(Cascader12),
  },
  {
    label: "Cascader - Custom Field Name",
    children: React.createElement(Cascader13),
  },
  {
    label: "Cascader - Custom dropdown",
    children: React.createElement(Cascader14),
  },
  {
    label: "Cascader - Placement",
    children: React.createElement(Cascader15),
  },
  {
    label: "Cascader - Status",
    children: React.createElement(Cascader16),
  },
]