import './App.css'
import {Chatgpt} from "./components/Chatgpt";
import {Gcp} from "./components/Gcp";
import {AnswerSpeech} from "./components/AnswerSpeech";

function App() {
  return (
    <div className="App">
      <h1>API Test</h1>
      <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
        <Chatgpt />
        <Gcp />
        <AnswerSpeech />
      </div>
    </div>
  )
}

export default App
