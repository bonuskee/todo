

import {
    GoogleGenAI,
    createUserContent,
    createPartFromUri,
} from "@google/genai";
import {
    NextResponse,
    
 } from "next/server";
export async function POST(request: Request) {
    try {
        console.log("/api/generate-responsemethod POST being called");
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
        
        if (GEMINI_API_KEY === "") {
                console.error("GEMINI_API_KEY is not found in .env file");
                return;
        }
        const { message } = await request.json();
        const ai = new GoogleGenAI({
            apiKey: GEMINI_API_KEY,
        });
        const modelName = "gemini-2.0-flash";
        // const cache = await ai.caches.create({
        //     model: modelName,
        //     config: {
        //         contents: createUserContent("Name: Bonus"),
        //         systemInstruction: "You are my assistant. Your name is Stark. Your answer will contain content that easily visualize with react markdown. Please anwser with in 50 words."
        //     }
        // })
    //     const response = await ai.models.generateContent({
    //         model: modelName,
    //         contents: message,
    //         // config: {
    //         //     cachedContent: cache,name,
    //         // },
    //     });
    //     console.log("response", JSON.stringify(response));
        
    //     return NextResponse.json(response.text);
    // }catch (error) {
    //     return NextResponse.json(
    //         {error: "Failed to generate response"},
    //         { status: 500 }
    //     );
    // }
}

