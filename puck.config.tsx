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
          <div className="hero-content" style={{
            maxWidth: '600px'
          }}>
            <h1 style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: '#333'
            }}>{title}</h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#666',
              marginBottom: '2rem'
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
                transition: 'background-color 0.2s ease'
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
