import type { TabsProps } from "antd";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "../App.css";
import ButtonXX from "./Button";
import FloatButtonXX from "./FloatButton";
import IconXX from "./Icon";
import TypographyXX from "./Typography";
import DiviverXX from "./Divider";
import GridXX from "./Grid";
import LayoutXX from "./Layout";
import SpaceXX from "./Space";
import AnchorXX from "./Anchor";
import BreadcrumbXX from "./Breadcrumb";
import DropdownXX from "./Dropdown";
import MenuXX from "./Menu";
import PaginationXX from "./Pagination";
import StepsXX from "./Steps";
import AutoCompleteXX from "./AutoComplete";
import CascaderXX from "./Cascader";
import CheckboxXX from "./Checkbox";
import ColerPickerXX from "./ColerPicker";
import DatePickerXX from "./DatePicker";
import FormXX from "./Form";
import InputXX from "./Input";
import InputNumberXX from "./InputNumber";
import MentionsXX from "./Mentions";
import RadioXX from "./Radio";
import RateXX from "./Rate";
import SelectXX from "./Select";
import SliderXX from "./Slider";
import SwitchXX from "./Switch";
import TimePickerXX from "./TimePicker";
import TransferXX from "./Transfer";
import TreeSelectXX from "./TreeSelect";
import UploadXX from "./Upload";
import AvatarXX from "./Avatar";
import BadgeXX from "./Badge";
import CalenderXX from "./Calender";
import CardXX from "./Card";
import CarouselXX from "./Carousel";
import CollapseXX from "./Collapse";
import DescriptionsXX from "./Descriptions";
import EmptyXX from "./Empty";
import ImageXX from "./Image";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

const items: TabsProps['items'] = [
  {
    label: "Home",
    children: <App />
  },
  ...ButtonXX,
  ...FloatButtonXX,
  ...IconXX,
  ...TypographyXX,
  ...DiviverXX,
  ...GridXX,
  ...LayoutXX,
  ...SpaceXX,
  ...AnchorXX,
  ...BreadcrumbXX,
  ...DropdownXX,
  ...MenuXX,
  ...PaginationXX,
  ...StepsXX,
  ...AutoCompleteXX,
  ...CascaderXX,
  ...CheckboxXX,
  ...ColerPickerXX,
  ...DatePickerXX,
  ...FormXX,
  ...InputXX,
  ...InputNumberXX,
  ...MentionsXX,
  ...RadioXX,
  ...RateXX,
  ...SelectXX,
  ...SliderXX,
  ...SwitchXX,
  ...TimePickerXX,
  ...TransferXX,
  ...TreeSelectXX,
  ...UploadXX,
  ...AvatarXX,
  ...BadgeXX,
  ...CalenderXX,
  ...CardXX,
  ...CarouselXX,
  ...CollapseXX,
  ...DescriptionsXX,
  ...EmptyXX,
  ...ImageXX,
].map((v, i) => ({ key: i.toString(), ...v }));

export { items }
