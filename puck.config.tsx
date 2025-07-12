import type { Config } from "@measured/puck";
import { useState, useEffect } from 'react';

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
      render: ({ title, backgroundImage }) => {
        const [isMounted, setIsMounted] = useState(false);
        const [isTitleVisible, setIsTitleVisible] = useState(false);
        const [isTextVisible, setIsTextVisible] = useState(false);
        const [isButtonVisible, setIsButtonVisible] = useState(false);

        useEffect(() => {
          setIsMounted(true);
          
          const titleTimeout = setTimeout(() => setIsTitleVisible(true), 200);
          const textTimeout = setTimeout(() => setIsTextVisible(true), 400);
          const buttonTimeout = setTimeout(() => setIsButtonVisible(true), 600);

          return () => {
            clearTimeout(titleTimeout);
            clearTimeout(textTimeout);
            clearTimeout(buttonTimeout);
          };
        }, []);

        return (
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
              {!isMounted ? (
                <div style={{
                  height: '100px',
                  width: '100%',
                  backgroundColor: '#eee'
                }} />
              ) : (
                <>
                  <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    color: '#333',
                    opacity: isTitleVisible ? 1 : 0,
                    transform: isTitleVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                  }}>{title}</h1>
                  <p style={{
                    fontSize: '1.25rem',
                    color: '#666',
                    marginBottom: '2rem',
                    opacity: isTextVisible ? 1 : 0,
                    transform: isTextVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
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
                      transition: 'background-color 0.2s ease, opacity 0.5s ease-out, transform 0.5s ease-out',
                      opacity: isButtonVisible ? 1 : 0,
                      transform: isButtonVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#0056b3';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#007bff';
                    }}
                  >Get Started</a>
                </>
              )}
            </div>
          </div>
        );
      },
    },
  },
};

export default config;
