import OpenAI from "openai";

// genereate a function to translate the text using openai

export const textTranslation = async (req, res) => {
  const { language, message } = req.body;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
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
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
