import { Note } from "shared/types";

type OptionsRowProps = {
  options: Note[];
  handleResolve: (answer: string) => void;
}

const OptionsRow = ({ options, handleResolve }: OptionsRowProps) => {
  return (
    <div className="bottom-row">
      {options.map((o, idx) => (
        <button key={idx} className="bottom-button" onClick={() => handleResolve(o.name)}>{o.name}</button>
      ))}
    </div>
  );
};

export default OptionsRow;