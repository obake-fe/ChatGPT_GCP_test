export async function useChatGPT(prompt = ''): Promise<string> {
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  // promptがない場合
  if (!prompt) return ""

  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      'model': 'text-ada-001',
      // 'model': 'text-curie-001', // 動作テスト用（料金的に）
      'prompt': prompt,
      "max_tokens": 50, // 出力される文章量の最大値（トークン数） max:4096
      "temperature": 1, // 単語のランダム性 min:0.1 max:2.0
      "top_p": 1, // 単語のランダム性 min:-2.0 max:2.0
      "frequency_penalty": 0.0, // 単語の再利用 min:-2.0 max:2.0
      "presence_penalty": 0.6, // 単語の再利用 min:-2.0 max:2.0
      "stop": [" Human:", " AI:"] // 途中で生成を停止する単語
    }),
  })

  const data = await response.json();
  return data.choices[0].text.trim();

}