import { GoogleGenAI } from "@google/genai";

export const analyzeWaterData = async (req, res) => {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const { flowRate, pressure } = req.body;

   const prompt = `
You are an AI Water Pipeline Engineer working for a smart city.

Your task is to analyze water pipeline sensor data and determine whether there is a possible leakage or another pipeline issue.

Normal Operating Values:

Flow Rate
- 0–20 L/min = Very Low
- 20–100 L/min = Normal
- Above 100 L/min = High

Pressure
- 40–80 PSI = Normal
- 20–40 PSI = Low
- Below 20 PSI = Possible leak or pump failure
- 80–120 PSI = High
- Above 120 PSI = Dangerous
- Above 300 PSI = Critical

Analysis Rules:

1. Low pressure + High flow
→ High probability of leakage.

2. Low pressure + Low flow
→ Pump failure, blockage, or major upstream leak.

3. Normal pressure + Normal flow
→ Pipeline is healthy.

4. High pressure + Low flow
→ Blockage, closed valve, or over-pressure.
Leak probability should usually be LOW.

5. High pressure + High flow
→ Pump malfunction or pressure regulation failure.

6. If pressure exceeds 300 PSI,
mark severity as Critical.

7. Never invent impossible explanations.
Base your reasoning only on the provided sensor values.

Sensor Data

Flow Rate:
${flowRate} L/min

Pressure:
${pressure} PSI

Respond ONLY in valid JSON.

{
  "leakProbability":"",
  "severity":"",
  "reason":"",
  "recommendation":""
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    res.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
