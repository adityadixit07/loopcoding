import OpenAI from "openai";

export const textTranslation = async (req, res) => {
  const { language, message } = req.body;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const retryCount = 3;
  let retries = 0;

  const translateText = async () => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "you will provide text and language i will translate it for you. and give you as json response.",
          },
          {
            role: "user",
            content: `Translate this into ${language}: ${message}`,
          },
        ],
      });
      const translatedText = response.data.choices[0].text.trim();
      return res.status(200).json({ message: "Success", data: translatedText });
    } catch (error) {
      if (
        error.response &&
        error.response.status === 429 &&
        retries < retryCount
      ) {
        // If rate limit error and retry count is less than maximum retries, retry after some time
        retries++;
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        return translateText(); // Retry translation
      } else {
        return res
          .status(500)
          .json({ message: "Internal Server Error", error: error.message });
      }
    }
  };

  await translateText(); // Start translation process
};
