import {useChatGPT} from "../hooks/useChatGPT";
import {useState} from "react";

export const Chatgpt = () => {

  const [answer, setAnswer] = useState("");

  const onClickButton = async () => {
    const prompt = 'hello';
    const res = useChatGPT(prompt);
    setAnswer(await res);
  }

  return (
    <div style={{marginTop: 16}}>
      <button onClick={() => onClickButton()}>
        execute ChatGPT
      </button>
      {answer && <p>{answer}</p>}
    </div>
  )
}