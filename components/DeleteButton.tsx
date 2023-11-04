"use client";
import React from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  noteId: number;
};

const DeleteButton = ({ noteId }: Props) => {
  const router = useRouter();
  const deleteNote = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/deleteNote", {
        noteId,
      });
      return response.data;
    },
  });
  return (
    <button
      className='bg-orange-600 py-[.3rem] px-[1rem] rounded'
      disabled={deleteNote.isPending}
      onClick={() => {
        const confirm = window.confirm(
          "Are you sure you want to delete this note?"
        );
        if (!confirm) return;
        deleteNote.mutate(undefined, {
          onSuccess: () => {
            router.push("/notion");
          },
          onError: (err) => {
            console.error(err);
          },
        });
      }}
    >
      <Trash className='w-4 md:w-6 text-gray-50' />
    </button>
  );
};

export default DeleteButton;
