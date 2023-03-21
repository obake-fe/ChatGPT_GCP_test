import {useTextToSpeech} from "../hooks/useTextToSpeech";

export const Gcp = () => {
  const textData = "Hello world";

  return (
    <button onClick={() => useTextToSpeech(textData)} style={{marginTop: 16}}>
      execute GCP Text-to-Speech
    </button>
  )
}