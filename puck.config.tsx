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
          
          <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-16">
            <div className="max-w-4xl text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Get Started</h1>
              <p className="text-xl md:text-2xl mb-8">Let's Get It.</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </section>
        </>
      ),
    },
  },
};

export default config;