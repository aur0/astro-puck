import { Render } from "@measured/puck";
import "../styles/global.css";

const config = {
    components: {
      HeadingBlock: {
        fields: {
          title: {
            type: "text",
          },
        },
        render: ({ title }) => {
          return <h1 class="font-size-8">{title}</h1>;
        },
      },
    },
  };

export default function Editor({ data }) {
  return <Render config={config} data={data} />;
}