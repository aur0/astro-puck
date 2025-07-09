import type { Config } from "@measured/puck";

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
        <>
        
          <section className="hero">
            <h1>Lets Get st oIt</h1>
            <p>Lets Get It.</p>
            <button>Get Started</button>
          </section>
        </>
      ),
    },
  },
};

export default config;