import { useState, useEffect } from 'react';
import manatee from './assets/img/manatee.jpeg';
import './App.css';

import { getManateeJoke, getBackgroundImage } from './services/index';

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
        <img src={manatee} className='manatee' alt='manatee' />
        {!isLoading ? (
          <div>
            <p>{joke.setup}</p>
            {joke.punchline && (
              <p
                onClick={handleShow}
                className={`punchline${clicked ? '-show' : ''}`}
              >
                {joke.punchline}
              </p>
            )}
          </div>
        ) : (
          <div>Loading joke..</div>
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
