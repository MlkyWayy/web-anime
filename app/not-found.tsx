"use client";

import { DoorOpen } from "@phosphor-icons/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <DoorOpen size={64} className="text-accent" />
      <h1 className="text-3xl font-bold text-accent">404 - Not Found</h1>
      <Link href="/" className="text-primary hover:text-accent transition-all border-b-2 border-primary">
        Kembali
      </Link>
    </div>
  );
};

export default NotFound;
