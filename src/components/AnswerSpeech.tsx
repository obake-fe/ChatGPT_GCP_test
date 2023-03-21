import {useTextToSpeech} from "../hooks/useTextToSpeech";
import {useState} from "react";
import {useChatGPT} from "../hooks/useChatGPT";

export const AnswerSpeech = () => {
  const [answer, setAnswer] = useState("");

  const onClickButton = async () => {
    const prompt = 'hello';
    const res = await useChatGPT(prompt);
    setAnswer(res);
    useTextToSpeech(res);
  }

  return (
    <div style={{marginTop: 16}}>
      <button onClick={() => onClickButton()}>
        execute ChatGPT and GCP Text-to-Speech
      </button>
      {answer && <p>{answer}</p>}
    </div>
  )
}