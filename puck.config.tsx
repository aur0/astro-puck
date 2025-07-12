import type { Config } from "@measured/puck";

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
        <div className="hero" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100vh',
          background: '#f5f5f5',
          padding: '0 1rem'
        }}>
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}
          </style>
          <div className="hero-content" style={{
            maxWidth: '600px'
          }}>
            <h1 style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: '#333',
              opacity: 0,
              animationName: 'fadeIn',
              animationDuration: '1s',
              animationTimingFunction: 'ease-in-out',
              animationFillMode: 'forwards'
            }}>{title}</h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#666',
              marginBottom: '2rem',
              opacity: 0,
              animationName: 'fadeIn',
              animationDuration: '1s',
              animationTimingFunction: 'ease-in-out',
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}>Your success starts here.</p>
            <a 
              href="#get-started" 
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                transition: 'background-color 0.2s ease',
                opacity: 0,
                animationName: 'fadeIn',
                animationDuration: '1s',
                animationTimingFunction: 'ease-in-out',
                animationDelay: '0.4s',
                animationFillMode: 'forwards'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff';
              }}
            >Get Started</a>
          </div>
        </div>
      ),
    },
  },
};

export default config;
