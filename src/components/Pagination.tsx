import {
  type PaginationProps,
  Pagination,
} from "antd";
import React, { useState } from "react";

export const Pagination01: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

export const Pagination02: React.FC = () => <Pagination defaultCurrent={6} total={500} />;

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize);
};
export const Pagination03: React.FC = () => (<>
  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500}></Pagination>
  <br />
  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} disabled></Pagination>
</>);

const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber);
};
export const Pagination04: React.FC = () => (<>
  <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange}></Pagination>
  <br />
  <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled></Pagination>
</>);

const showTotal: PaginationProps['showTotal'] = (total) => `Total ${total} items`;
export const Pagination05: React.FC = () => (<>
  <Pagination size="small" total={50}></Pagination>
  <Pagination size="small" total={50} showSizeChanger showQuickJumper></Pagination>
  <Pagination size="small" total={50} showTotal={showTotal}></Pagination>
  <Pagination
    size="small"
    total={50}
    disabled
    showTotal={showTotal}
    showSizeChanger
    showQuickJumper
  ></Pagination>
</>);

export const Pagination06: React.FC = () => (<>
  <Pagination simple defaultCurrent={2} total={50}></Pagination>
  <br />
  <Pagination simple defaultCurrent={2} total={50} disabled></Pagination>
</>);

export const Pagination07: React.FC = () => {
  const [current, setCurrent] = useState(3);
  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={50} />;
};

export const Pagination08: React.FC = () => (
  <>
    <Pagination
      total={85}
      showTotal={(total) => `Total ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </>
);

export const Pagination09: React.FC = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
);

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
export const Pagination10: React.FC = () => <Pagination total={500} itemRender={itemRender} />;

export default [
  {
    label: "Pagination - Basic",
    children: React.createElement(Pagination01),
  },
  {
    label: "Pagination - More",
    children: React.createElement(Pagination02),
  },
  {
    label: "Pagination - Changer",
    children: React.createElement(Pagination03),
  },
  {
    label: "Pagination - Jumper",
    children: React.createElement(Pagination04),
  },
  {
    label: "Pagination - Mini size",
    children: React.createElement(Pagination05),
  },
  {
    label: "Pagination - Simple mode",
    children: React.createElement(Pagination06),
  },
  {
    label: "Pagination - Controlled",
    children: React.createElement(Pagination07),
  },
  {
    label: "Pagination - Total number",
    children: React.createElement(Pagination08),
  },
  {
    label: "Pagination - Show All",
    children: React.createElement(Pagination09),
  },
  {
    label: "Pagination - Prev and next",
    children: React.createElement(Pagination10),
  },
]