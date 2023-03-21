
// 音声合成
export function useTextToSpeech(text: string) {
  const API_KEY = import.meta.env.VITE_GCP_API_KEY;
  const url = "https://texttospeech.googleapis.com/v1/text:synthesize?key=" + API_KEY;
  const data = {
    "input": {
      "text": text
    },
    "voice": {
      "languageCode": "en-US",
      "name": "en-US-Neural2-H"
    },
    // "voice": {
    //   "languageCode": "ja-JP",
    //   "name": "ja-JP-Standard-B"
    // },
    "audioConfig": {
      "audioEncoding": "MP3",
      "speaking_rate": "1.00",
      "pitch": "0.00"
    }
  }

  const otherParam={
    headers: {
      "content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data),
    method: "POST"
  }

  fetch(url, otherParam)
    .then(data=>{return data.json()})
    .then(res=>{
      try {
        const blobUrl = base64ToBlobUrl(res.audioContent)
        const audio = new Audio()
        audio.src = blobUrl
        audio.play()
      } catch(e) {
        console.log(e)
      }
    })
    .catch(error=>alert(error))
}

// Base64 → BlobUrl
function base64ToBlobUrl(base64: string) {
  const bin = atob(base64.replace(/^.*,/, ''))
  const buffer = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++ ) {
    buffer[i] = bin.charCodeAt(i)
  }
  return window.URL.createObjectURL(new Blob([buffer.buffer], {type: "audio/wav"}))
}