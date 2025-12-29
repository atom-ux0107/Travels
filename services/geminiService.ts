
import { GoogleGenAI, Type } from "@google/genai";
import { TripPlan } from "../types";

export const generateTripPlan = async (preferences: {
  vibe: string;
  budget: string;
  duration: number;
  interests: string;
}): Promise<TripPlan> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Plan a ${preferences.duration}-day ${preferences.vibe} trip with a ${preferences.budget} budget. Interests: ${preferences.interests}.`,
    config: {
      systemInstruction: "You are a world-class luxury travel agent. Generate a structured JSON travel plan.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          destination: { type: Type.STRING },
          summary: { type: Type.STRING },
          highlights: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          itinerary: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.NUMBER },
                activity: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ["day", "activity", "description"]
            }
          },
          budget_level: { type: Type.STRING }
        },
        required: ["destination", "summary", "highlights", "itinerary", "budget_level"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};
