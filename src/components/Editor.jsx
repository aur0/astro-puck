import { Render } from "@measured/puck";

const config = {
    components: {
      HeadingBlock: {
        fields: {
          title: {
            type: "text",
          },
        },
        render: ({ title }) => {
          return <h1 class="fade-in-text">{title}</h1>;
        },
      },
    },
  };

export default function Editor({ data }) {
  return <Render config={config} data={data} />;
}