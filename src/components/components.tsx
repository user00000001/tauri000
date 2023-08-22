import type { TabsProps } from "antd";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "../App.css";
import MButton from "./Button";
import MFloatButton from "./FloatButton";

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
    children: <MButton.Button01 />
  },
  {
    label: "Button - Icon",
    children: <MButton.Button02 />
  },
  {
    label: "Button - Size",
    children: <MButton.Button03 />
  },
  {
    label: "Button - Disabled",
    children: <MButton.Button04 />
  },
  {
    label: "Button - Loading",
    children: <MButton.Button05 />
  },
  {
    label: "Button - Mutiple Buttons",
    children: <MButton.Button06 />
  },
  {
    label: "Button - Ghost Button",
    children: <MButton.Button07 />
  },
  {
    label: "Button - Danger Buttons",
    children: <MButton.Button08 />
  },
  {
    label: "Button - Block Button",
    children: <MButton.Button09 />
  },
  {
    label: "FloatButton - Basic",
    children: <MFloatButton.C01 />
  },
  {
    label: "FloatButton - Type",
    children: <MFloatButton.C02 />
  },
  {
    label: "FloatButton - Shape",
    children: <MFloatButton.C03 />
  },
  {
    label: "FloatButton - Description",
    children: <MFloatButton.C04 />
  },
  {
    label: "FloatButton - FloatButton with tooltip",
    children: <MFloatButton.C05 />
  },
  {
    label: "FloatButton - FloatButton Group",
    children: <MFloatButton.C06 />
  },
  {
    label: "FloatButton - Menu mode",
    children: <MFloatButton.C07 />
  },
  {
    label: "FloatButton - Controlled mode",
    children: <MFloatButton.C08 />
  },
  {
    label: "FloatButton - BackTop",
    children: <MFloatButton.C09 />
  },
  {
    label: "FloatButton - badge",
    children: <MFloatButton.C10 />
  },
].map((v, i) => ({ key: i.toString(), ...v }));

export { items }
