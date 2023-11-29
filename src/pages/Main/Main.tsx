import { useState } from 'react';
import './Main.css'; // Assuming you have a CSS file named App.css for styling
import { GameState, Results } from '../../shared/types';
import StartPrompt from './components/StartPrompt';
import CountDown from './components/CountDown';
import Game from './components/Game/Game';

const Main = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START_PROMPT)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_results, setResults] = useState<Results>()

  const renderGameState = (state: GameState) => {
    switch (state) {
      case GameState.START_PROMPT: return <StartPrompt handleNextStep={() => setGameState(GameState.COUNTDOWN)} />;
      case GameState.COUNTDOWN: return <CountDown handleNextStep={() => setGameState(GameState.GAME_IN_PROGRESS)} />;
      case GameState.GAME_IN_PROGRESS: return <Game handleNextStep={() => setGameState(GameState.RESULTS)} handleSetResults={setResults} />;
      //case GameState.RESULTS: return <Results handleNextStep={() => setGameState(GameState.RESULTS)} results={results} />;
      default: return <div>{'default'}</div>
    }
  }

  return (
    <div className="app-container">

      {renderGameState(gameState)}

    </div>
  );
};

export default Main;
