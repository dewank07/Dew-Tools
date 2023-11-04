import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteButton from "@/components/DeleteButton";
import TipTapEditor from "@/components/TipTapEditor";
import React from "react";
import { clerk } from "@/lib/clerk-server";

type Props = {
  params: {
    noteId: string;
  };
};

const NotebookPage = async ({ params: { noteId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/notion");
  }
  const user = await clerk.users.getUser(userId);
  const notes = await db
    .select()
    .from($notes)
    .where(and(eq($notes.id, parseInt(noteId)), eq($notes.userId, userId)));

  if (notes.length != 1) {
    return redirect("/notion");
  }
  const note = notes[0];

  return (
    <div className='min-h-screen grainy p-4 md:p-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='border shadow-xl border-stone-200 rounded-lg p-4 flex items-center'>
          <Link href='/notion'>
            <button className='bg-orange-600 text-white p-[.5rem] rounded dark:text-white text-xs md:text-sm md:p-2'>
              Back
            </button>
          </Link>
          <div className='w-3'></div>
          <span className='font-semibold text-xs md:text-sm '>
            {user.firstName} {user.lastName}
          </span>
          <span className='inline-block mx-1'>/</span>
          <span className='text-stone-500 font-semibold text-xs md:text-sm'>
            {note.name}
          </span>
          <div className='ml-auto'>
            <DeleteButton noteId={note.id} />
          </div>
        </div>

        <div className='h-4'></div>
        <div className='border-stone-200 shadow-xl border rounded-lg px-16 py-8 w-full'>
          <TipTapEditor note={note} />
        </div>
      </div>
    </div>
  );
};

export default NotebookPage;
