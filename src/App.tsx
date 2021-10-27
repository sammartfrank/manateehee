import { useState, useEffect } from 'react';
import manatee from './assets/img/manatee.jpeg';
import './App.css';

import { getManateeJoke } from './services/index';

function App() {
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [joke, setJoke] = useState({
    setup: '',
    punchline: '',
  });

  const handleGetManates = () => {
    setIsLoading(true);
    getManateeJoke().then((res) => {
      setJoke(res);
      setClicked(false);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    handleGetManates();
  }, []);

  const handleShow = () => {
    setClicked(true);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {!isLoading ? (
          <>
            <p className='setup'>{joke.setup}</p>
            {joke.punchline && (
              <div className={`punchline${clicked ? '-show' : ''}`}>
                <p className='text' onClick={handleShow}>
                  {joke.punchline}
                </p>
              </div>
            )}
          </>
        ) : (
          <div style={{ color: 'goldenrod', background: 'rgb(85, 37, 130)', padding: '1rem' }}>Loading joke..</div>
        )}
        <div className='button-wrapper'>
          <button
            className='button'
            disabled={!clicked}
            onClick={handleGetManates}
          >
            New
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
