import React, { use, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import { Card } from "../ui/card";

interface ResponseMessageProps {
  message: string | null | undefined;
}
const ResponseMessage = ({ message }: ResponseMessageProps) => {
 
  // return message ? (
  //   <div className="text-white mt-12 items-start justify-center flex flex-col gap-4 wrap-break-words">
  //     <Card className="w-1/2 bg-gray-700 text-white p-4 rounded=2xl shadow-md border-none">
  //       <ReactMarkdown>{message}</ReactMarkdown>
  //     </Card>
  //   </div>
  // ) : (
    
    // <div className=" text-white mt-12 items-end justify-center flex flex-col gap-4">
    //   <Card className="w-1/2 bg-blue-950 text-white p-4 rounded=2xl shadow-md border-none">
    //     No Message Provided
    //   </Card>
    // </div>
  // );
return (
    <div className="text-white mt-12 items-start justify-center flex flex-col gap-4 wrap-break-words">
      <Card className="w-1/2 bg-gray-700 text-white p-4 rounded=2xl shadow-md border-none">
        <ReactMarkdown>{message}</ReactMarkdown>
      </Card>
  </div>
)
};

export default ResponseMessage;
