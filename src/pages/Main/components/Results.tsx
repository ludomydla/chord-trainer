import { Results } from "../../../shared/types";

type ResultsProps = {
  results: Results;
}

const Results = ({ results }: ResultsProps) => {
  return (
    <div>
      <ul>
        <li>Correct {results.correct}</li>
        <li>Failed {results.fails}</li>
        <li>Missed {results.missed}</li>
        <li>Rating {results.correct / results.all}</li>
      </ul>

    </div>
  )
};

export default Results;
