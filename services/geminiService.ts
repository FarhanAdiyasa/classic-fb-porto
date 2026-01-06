import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Only initialize if API key is present
const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string) => {
  if (!apiKey || !ai) {
    // Graceful fallback when no API key
    return "☕ *sips coffee* Hey! The AI chat is in demo mode right now. Check out my projects by clicking the laptop, or explore my story in the books on the shelf!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted... The wifi in this cozy room is a bit spotty today. (Check console for details)";
  }
};