useStateHook.js


useStateHook.js
---------------------------
import React from 'react';

export const Watermark = () => {
  const watermarkStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    fontSize: '20px',
    color: '#888',
    opacity: 0.6,
  };

  return <div style={watermarkStyle}>Hemalatha-22BQ1A4240</div>;
};



App.js
-----------------
import React from 'react';
import { ThemeProvider, ThemeComponent } from './useContextHook';
import { CounterComponent, UserInfoComponent } from './useEventHook';
import { Watermark } from './useStateHook';

const App = () => {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
  };

  return (
    <ThemeProvider>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h1 style={{ borderBottom: '2px solid orange', color: 'blue' }}>
          All HOOKS @ Once
        </h1>
      </div>
      <div style={appStyle}>
        <CounterComponent />
        <ThemeComponent />
        <UserInfoComponent />
      </div>
      <Watermark />
    </ThemeProvider>
  );
};

export default App;
