import type { Config } from "@measured/puck";
import FadeIn from "./src/components/FadeIn";

type Props = {
  HeadingBlock: { title: string };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <FadeIn title={title} />
      ),
    },
  },
};

export default config;
