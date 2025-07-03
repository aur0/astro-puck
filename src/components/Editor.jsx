import { Render } from "@measured/puck";
import config from "../../puck.config.tsx";

export default function Editor({ data }) {
  return <Render config={config} data={data} />;
}