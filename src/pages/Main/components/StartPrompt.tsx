type StartPromptProps = {
  handleNextStep: () => void;
}

const StartPrompt = ({ handleNextStep }: StartPromptProps) => {
  return (
    <div className="center-container">
      <button className="big-button" onClick={handleNextStep}>
        Start trainig
      </button>
    </div>
  )
};

export default StartPrompt;
