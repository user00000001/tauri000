import React, { useEffect, useState } from "react";
import {
  Anchor,
  Row,
  Col,
} from "antd";

export const Anchor01: React.FC = () => (
  <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);

export const Anchor02: React.FC = () => (
  <>
    <div style={{ padding: '20px' }}>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
          {
            key: 'part-4',
            href: '#part-4',
            title: 'Part 4',
          },
          {
            key: 'part-5',
            href: '#part-5',
            title: 'Part 5',
          },
          {
            key: 'part-6',
            href: '#part-6',
            title: 'Part 6',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#FFFBE9' }}
      />
      <div
        id="part-4"
        style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#F4EAD5' }}
      />
      <div
        id="part-5"
        style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#DAE2B6' }}
      />
      <div
        id="part-6"
        style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#CCD6A6' }}
      />
    </div>
  </>
);

export const Anchor03: React.FC = () => (
  <Anchor affix={false} items={[
    {
      key: '1',
      href: '#components-anchor-demo-basic',
      title: 'Basic demo',
    },
    {
      key: '2',
      href: '#components-anchor-demo-static',
      title: 'Static demo',
    },
    {
      key: '3',
      href: '#api',
      title: 'API',
      children: [
        {
          key: '4',
          href: '#anchor-props',
          title: 'Anchor Props',
        },
        {
          key: '5',
          href: '#link-props',
          title: 'Link Props',
        },
      ],
    },
  ]} />
);

const handleClick = (e: React.MouseEvent<HTMLElement>, link: { title: React.ReactNode, href: string }) => {
  e.preventDefault();
  console.log(link);
};
export const Anchor04: React.FC = () => (
  <Anchor
    affix={false}
    onClick={handleClick}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);

const getCurrentAnchor = () => '#components-anchor-demo-static';
export const Anchor05: React.FC = () => (
  <Anchor
    affix={false}
    getCurrentAnchor={getCurrentAnchor}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);

export const Anchor06: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <div>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{ height: '100vh', background: 'rgba(255,0,0,0.02)', marginTop: '30vh' }}
          >
            Part 1
          </div>
          <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }}>
            Part 2
          </div>
          <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }}>
            Part 3
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Part 1',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Part 2',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Part 3',
              },
            ]}
          />
        </Col>
      </Row>

      <div
        style={{
          height: '30vh',
          background: 'rgba(0,0,0,0.85)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '75%',
          color: '#FFF',
        }}
        ref={topRef}
      >
        <div>Fixed Top Block</div>
      </div>
    </div>
  );
};

const onChange = (link: string) => {
  console.log('Anchor:OnChange', link);
}
export const Anchor07: React.FC = () => (
  <Anchor
    affix={false}
    onChange={onChange}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);

export const Anchor08: React.FC = () => (
  <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        replace
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);

export default [
  {
    label: "Anchor - Basic",
    children: React.createElement(Anchor01),
  },
  {
    label: "Anchor - Horizontal Anchor",
    children: React.createElement(Anchor02),
  },
  {
    label: "Anchor - Static Anchor",
    children: React.createElement(Anchor03),
  },
  {
    label: "Anchor - Customize the onClick event",
    children: React.createElement(Anchor04),
  },
  {
    label: "Anchor - Customize the anchor highlight",
    children: React.createElement(Anchor05),
  },
  {
    label: "Anchor - Set Anchor scroll offset",
    children: React.createElement(Anchor06),
  },
  {
    label: "Anchor - Listening for anchor link change",
    children: React.createElement(Anchor07),
  },
  {
    label: "Anchor - Replace href in history",
    children: React.createElement(Anchor08),
  },
]