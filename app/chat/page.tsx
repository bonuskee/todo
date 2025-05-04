"use client"
import PageDescription from '@/components/chat/page-description'
import PromptForm from '@/components/chat/prompt-form';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React, { useState } from 'react'

export interface Message {
  role: "user" | "assistant";
  text: string;
}

const chatpage = () => {
  // const [isSubmitted, setIsSubmitted] = useState(true);
  // const [messages, setMessages] = useState<string[]>(["test1", "test2"]);

  // const [aiResponseMessages, setAiResponseMessages] = useState<string[]>([
  //   "test answer1",
  //   "test answer2",
  // ]);

  const [isSubmitted, setIsSubmitted] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: "user", text: "test1" },
    { role: "assistant", text: "test answer1" },
    { role: "user", text: "test2" },
    { role: "assistant", text: "test answer2" },

  ])

  return (
    <div className="h-full flex flex-col relative bg-black ">
      {!isSubmitted && <PageDescription />}
      {/* <div className="space-y-8 flex-col w-full items-center justify-center h-full bg-gray-800 flex"> */}
      {isSubmitted && (
        <ScrollArea className="flex-1 py-6 px-4 bg-black ">
          {messages.map((message,index) => (
            <div key={index} className={`text-white   justify-center flex flex-col gap-4 mt-4
              ${(message.role === "user" ? "items-end" : "items-start" )}`}>
              <Card className="max-w-3xl  bg-blue-950 text-white p-4 rounded=2xl shadow-md border-none">
                {message.text}
              </Card>
            </div>
          ))}
          {/* {aiResponseMessages.map((aiResponseMessage) => (
            <div className="text-white mt-12 items-start justify-center flex flex-col gap-4">
              <div className=" w-full  p-4 text-white">
                {aiResponseMessage}
              </div>
            </div>
          ))} */}
        </ScrollArea>
      )}
      <PromptForm
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        messages={messages}
        setMessages={setMessages}
        
      />

      {/* /*{" "}
      <div className="bg-black ">
        <Card className="h-32 rounded-b-none p-2">
          <PromptForm
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
          />
        </Card>
      </div>{" "}
      */}
    </div>
  );
}

export default chatpage