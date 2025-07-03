import { Render } from "@measured/puck";
import config from "../../puck.config.tsx";

export default function Puck({ data }) {
  return <Render config={config} data={data} />;
}