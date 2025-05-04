import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { uploadToGoogleDrive } from "@/utils/uploadfile";
import { set } from "react-hook-form";
interface TodoFormProps {
  addTodo: (todo: { text: string; imageUrl: string }) => void;
}
const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedImage(file);
    }
  };
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      setIsUploading(true);
      if (selectedImage) {
        const imageUrl = await uploadToGoogleDrive(selectedImage, "todo-image");
        setSelectedImageUrl(imageUrl);
      }
      addTodo({
        text: todo,
        imageUrl: selectedImageUrl || "",
      });
      setTodo("");
      setIsUploading(false);
    } catch (error) {
      setIsUploading(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <form
        className="w-full max-w-md flex flex-col gap-4"
        onSubmit={submitForm}
      >
        <div className="flex items-center gap-4">
          <label>Todo</label>
          <input
            placeholder="Enter item"
            value={todo}
            className="border border-black rounded-md p-2 flex-1"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="flex-1"
          />
        </div>
        {selectedImageUrl}
        {selectedImageUrl && (
          <div className="flex">
            <Image
              src={selectedImageUrl}
              alt={selectedImageUrl as string}
              width={400}
              height={400}
              className="object-cover rounded-md"
            />
          </div>
        )}
        <Button type="submit" disabled={isUploading}>
          {isUploading
            ? "Uploading..."
            : isSubmitting
            ? "Submitting..."
            : "Submit"}
        </Button>
        {}
      </form>
    </div>
  );
};

export default TodoForm;
