"use client";
// imports
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export default function Navbar({}): any {
  const { setTheme } = useTheme();

  return (
    <nav className='w-full backdrop-blur-md bg-white dark:bg-gray-900 bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24'>
      <Link
        href='/'
        className='flex flex-col gap-2 items-center justify-center'
      >
        <div className='font-semibold text-orange-600'>
          <div className='text-lg'>Dew Tools.</div>
        </div>
      </Link>
      <div className='gap-1 hidden md:flex md:gap-2 lg:gap-4 '>
        <Button variant='ghost' className='font-semibold text-md'>
          <Link href='/'>Home</Link>
        </Button>

        <Button variant='ghost' className='font-semibold text-md'>
          <Link href='/converter'>Converter</Link>
        </Button>

        <Button variant='ghost' className='font-semibold text-md'>
          <Link href='/scanner'>Scanner</Link>
        </Button>
        <Button variant='ghost' className='font-semibold text-md'>
          <Link href='/qrmaker'>QR Generator</Link>
        </Button>
        <Button variant='ghost' className='font-semibold text-md'>
          <Link href='/notion'>Note-ion</Link>
        </Button>
      </div>
      <div className='gap-1 hidden md:flex md:gap-2 lg:gap-4 '>
        <Link href='https://github.com/dewank07'>
          <Button
            variant='default'
            className='rounded-full w-fit bg-orange-600 gap-2 items-center hidden md:flex '
            size='lg'
          >
            <span>Know the Authour</span>
            <span className='text-xl'>
              <BsGithub />
            </span>
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UserButton afterSignOutUrl='/' />
      </div>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className='block md:hidden p-3'>
          <span className='text-2xl'>
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className='w-full space-y-8 flex flex-col gap-8'>
                <SheetClose asChild>
                  <Button variant='ghost' className='font-semibold text-md'>
                    <SheetClose asChild>
                      <Link href='/'>Home</Link>
                    </SheetClose>
                  </Button>
                </SheetClose>

                <SheetClose asChild>
                  <Button variant='ghost' className='font-semibold text-md'>
                    <SheetClose asChild>
                      <Link href='/converter'>Converter</Link>
                    </SheetClose>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant='ghost' className='font-semibold text-md'>
                    <SheetClose asChild>
                      <Link href='/scanner'>Scanner</Link>
                    </SheetClose>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant='ghost' className='font-semibold text-md'>
                    <SheetClose asChild>
                      <Link href='/qrmaker'>QR Generator</Link>
                    </SheetClose>
                  </Button>
                </SheetClose>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
