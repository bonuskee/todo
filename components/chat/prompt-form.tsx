"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
import { Textarea } from "../ui/textarea";
import ResponseMessage from "./response-message";
import { GoogleGenAI } from "@google/genai";
import PageDescription from "./page-description";
import { Card } from "../ui/card";
import { Message } from "@/app/chat/page";

interface PromptFormProps {
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  
}

const PromptForm = ({
  isSubmitted,
  setIsSubmitted,
  messages,
  setMessages,
  }: PromptFormProps) => {
 
  useEffect(() => {});
  // const [message, setMessage] = useState("");

  const [prompt, setPrompt] = useState("");
  const submitForm = () => {};
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  const formSchema = z.object({
    prompt: z
      .string()

      .max(500, {
        message: "Message is too long",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("value", values);
    setIsSubmitted(true);
    setMessages([...messages, 
      {
        role: "user",
        text: values.prompt,
      },
      {
        role: "assistant",
        text: "Waiting for AI response...",
      },
    ]);
    
    // setMessages([
    //   ...messages,
    //   {
    //     role: "assistant",
    //     text: "Waiting for AI response...",
    //   },
    // ]);

    const response = await fetch("/api/generate-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: values.prompt }),
    });
    if (response.ok) {
      const data = await response.json();
      setMessages([
        ...messages,
        {
          role: "user",
          text: values.prompt,
        },
       
        {
          role: "assistant",
          text: data,
        },
      ]);
      
    }
  };
  return (
    <div className={`px-6 w-full ${isSubmitted && " px-0 bottom-0 sticky z-10"}`}>
      {!isSubmitted && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 w-full">
                  <FormControl className="h-14 text-white rounded-md flex">
                    <Textarea
                      className="text-wrap whitespace-normal break-words h-auto min-h-20"
                      variant={"default"}
                      placeholder="Message Exclusive Chatbot"
                      {...field}
                    />
                  </FormControl>
                  <Button>
                    <ArrowUp />
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )}
      {isSubmitted && (
        <Card className="w-full p-3 rounded-b-none bg-blue-800 border-none ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 w-full">
                    <FormControl className="h-14 text-white rounded-md flex">
                      <Textarea
                        className="text-wrap whitespace-normal break-words h-auto min-h-20"
                        variant={"default"}
                        placeholder="Message Exclusive Chatbot"
                        {...field}
                      />
                    </FormControl>
                    <Button>
                      <ArrowUp />
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </Card>
      )}
      {/* {isSubmitted && (
        <div className="text-white mt-12 items-end justify-center flex flex-col gap-4">
          <Card className="w-1/2 bg-blue-950 text-white p-4 rounded=2xl shadow-md border-none">
            {message}
          </Card>
        </div>
      )} */}
      {/* <ResponseMessage message={aiResponseMessage} /> */}
    </div>
  );
};

export default PromptForm;
