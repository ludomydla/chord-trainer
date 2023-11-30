import { useCallback, useEffect, useState } from "react";
import { Note, Results } from "shared/types";
import OptionsRow from "./components/OptionsRow";
import { NOTES_ORDER } from "shared/constants";
import FretBoard from "./components/FretBoard";

type GameProps = {
  handleNextStep: () => void;
  handleSetResults: (results: Results) => void;
}

type Question = {
  guess: Note,
  options: Note[]
}

const Game = ({ handleNextStep, handleSetResults }: GameProps) => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionIdx, setQuestionIdx] = useState<number>(0)
  const [correct, setCorrect] = useState<number>(0)
  const [fails, setFails] = useState<number>(0)
  const [missed, setMissed] = useState<number>(0)

  const MAX_QUESTION = 10;
  const OPTIONS_COUNT = 4;

  useEffect(() => {

    function shuffleArray(array: Note[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function getRandomItems(arr: Note[], count: number) {
      const shuffledArray = shuffleArray([...arr]);
      return shuffledArray.slice(0, count);
    }

    // generate random questions
    const questions = Array.from({ length: MAX_QUESTION })
      .map(() => {
        const shuffledArr = shuffleArray(NOTES_ORDER)
        const options = getRandomItems(shuffledArr, OPTIONS_COUNT)
        const guess = options[Math.floor(Math.random() * OPTIONS_COUNT)]

        return {
          guess,
          options
        }
      })

    console.log('-------quesstions', questions)
    setQuestions(questions);
  }, [])

  useEffect(() => {
    const sum = correct + fails + missed;
    if (sum === MAX_QUESTION) {
      const res = {
        all: correct + fails + missed,
        correct,
        fails,
        missed,
      }
      console.log('------- results', res)

      handleSetResults(res)
      handleNextStep();
    }
  }, [correct, fails, handleNextStep, handleSetResults, missed])

  const resolveQuestion = useCallback((answer: string | undefined) => {
    console.log('-------------', questionIdx, answer, questions[questionIdx].guess.name,)

    if (answer === undefined) {
      setMissed(num => num + 1)
    }

    if (answer === questions[questionIdx].guess.name) {
      setCorrect(num => num + 1)
    } else setFails(num => num + 1)

    if (questionIdx < MAX_QUESTION - 1) setQuestionIdx(idx => idx + 1)
  }, [questionIdx, questions]);

  const renderQuestion = useCallback((idx: number) => {
    if (questions.length === 0) return <div>{'PReparing'}</div>

    const q: Question = questions[idx];
    return (<>
      <div>{`${idx + 1} / ${MAX_QUESTION}`}</div>
      <div>{`To guess: ${q.guess.name}`}</div>
      <FretBoard selectedString={3} selectedFret={5} />
      <OptionsRow options={q.options} handleResolve={resolveQuestion} />
    </>)
  }, [questions, resolveQuestion]);

  return (
    <div>
      {renderQuestion(questionIdx)}
    </div>
  )
};

export default Game;
