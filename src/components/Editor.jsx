import { Render } from "@measured/puck";
import { LazyMotion, domAnimation, m } from "motion/react"

const config = {
    components: {
      HeadingBlock: {
        fields: {
          title: {
            type: "text",
          },
        },
        render: ({ title }) => {
          return (
            <LazyMotion features={domAnimation}>
              <m.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-size-5"
              >
                {title}
              </m.h1>
            </LazyMotion>
          );
        },
      },
    },
  };

export default function Editor({ data }) {
  return <Render config={config} data={data} />;
}