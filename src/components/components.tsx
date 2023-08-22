import type { TabsProps } from "antd";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "../App.css";
import {
  Button01,
  Button02,
  Button03,
  Button04,
  Button05,
  Button06,
  Button07,
  Button08,
  Button09,
} from "./Button";
import {
  FButton01,
  FButton02,
  FButton03,
  FButton04,
  FButton05,
  FButton06,
  FButton07,
  FButton08,
  FButton09,
  FButton10,
} from "./FloatButton";
import {
  Icon01,
  Icon02,
  Icon03,
  Icon04,
  Icon05,
} from "./Icon";

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
  {
    label: "Button - Type",
    children: <Button01 />
  },
  {
    label: "Button - Icon",
    children: <Button02 />
  },
  {
    label: "Button - Size",
    children: <Button03 />
  },
  {
    label: "Button - Disabled",
    children: <Button04 />
  },
  {
    label: "Button - Loading",
    children: <Button05 />
  },
  {
    label: "Button - Mutiple Buttons",
    children: <Button06 />
  },
  {
    label: "Button - Ghost Button",
    children: <Button07 />
  },
  {
    label: "Button - Danger Buttons",
    children: <Button08 />
  },
  {
    label: "Button - Block Button",
    children: <Button09 />
  },
  {
    label: "FloatButton - Basic",
    children: <FButton01 />
  },
  {
    label: "FloatButton - Type",
    children: <FButton02 />
  },
  {
    label: "FloatButton - Shape",
    children: <FButton03 />
  },
  {
    label: "FloatButton - Description",
    children: <FButton04 />
  },
  {
    label: "FloatButton - FloatButton with tooltip",
    children: <FButton05 />
  },
  {
    label: "FloatButton - FloatButton Group",
    children: <FButton06 />
  },
  {
    label: "FloatButton - Menu mode",
    children: <FButton07 />
  },
  {
    label: "FloatButton - Controlled mode",
    children: <FButton08 />
  },
  {
    label: "FloatButton - BackTop",
    children: <FButton09 />
  },
  {
    label: "FloatButton - badge",
    children: <FButton10 />
  },
  {
    label: "Icon - Basic",
    children: <Icon01 />
  },
  {
    label: "Icon - Two-tone icon and colorful icon",
    children: <Icon02 />
  },
  {
    label: "Icon - Custom Icon",
    children: <Icon03 />
  },
  {
    label: "Icon - Use iconfont.cn",
    children: <Icon04 />
  },
  {
    label: "Icon - Multiple resources from iconfont.cn",
    children: <Icon05 />
  },
].map((v, i) => ({ key: i.toString(), ...v }));

export { items }
