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
          <style>{`
            .hero {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100vh;
              text-align: center;
              background: linear-gradient(135deg, #6b73ff 0%, #000dff 100%);
              color: white;
              padding: 0 20px;
            }

            .hero h1 {
              font-size: 3rem;
              margin-bottom: 0.5em;
              max-width: 700px;
            }

            .hero p {
              font-size: 1.25rem;
              max-width: 500px;
              margin-bottom: 1.5em;
              line-height: 1.5;
              opacity: 0.9;
            }

            .hero button {
              background-color: #ff4081;
              border: none;
              padding: 15px 30px;
              font-size: 1.1rem;
              color: white;
              border-radius: 30px;
              cursor: pointer;
              transition: background-color 0.3s ease;
              box-shadow: 0 4px 12px rgba(255,64,129,0.4);
            }

            .hero button:hover {
              background-color: #e73370;
            }

            /* Responsive tweaks */
            @media (max-width: 600px) {
              .hero h1 {
                font-size: 2rem;
              }
              .hero p {
                font-size: 1rem;
              }
              .hero button {
                padding: 12px 25px;
                font-size: 1rem;
              }
            }
          `}</style>
          <section className="hero">
            <h1>Welcome to Your Awesome Landing Page</h1>
            <p>Build something amazing with clean, fast, and pure vanilla CSS and HTML. No frameworks needed.</p>
            <button>Get Started</button>
          </section>
        </>
      ),
    },
  },
};

export default config;