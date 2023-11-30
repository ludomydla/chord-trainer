import { DEFAULT_TUNING, NUM_OF_FRETS } from 'shared/constants';
import './FretBoard.css';

type FretBoardProps = {
  selectedString: number;
  selectedFret: number;
}

const FretBoard = ({ selectedString, selectedFret }: FretBoardProps) => {

  const isActiveClass = (idx: number, jdx: number) => {
    if (idx === selectedString && jdx === selectedFret) return 'fretBoard_Highlight'
    else return ''
  }

  return (<div className="fretBoard">
    {DEFAULT_TUNING.map((_str, idx) => (<div key={idx} className="fretBoard_String">
      {Array.from({ length: NUM_OF_FRETS })
        .map((_fret, jdx) => (
          <div key={jdx}
            className={`fretBoard_Fret ${isActiveClass(idx, jdx)}`}
          >
            {' '}
          </div>
        ))}
    </div>))}
  </div>)
};

export default FretBoard;
