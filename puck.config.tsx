import type { Config } from "@measured/puck";
import FadeIn from "./src/components/FadeIn";

type Props = {
  HeadingBlock: { 
    title: string;
    backgroundImage: string;
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
        backgroundImage: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
        backgroundImage: "https://images.pexels.com/photos/32917624/pexels-photo-32917624.jpeg"
      },
      render: ({ title, backgroundImage }) => (
        <FadeIn title={title} backgroundImage={backgroundImage} />
      ),
    },
  },
};

export default config;
