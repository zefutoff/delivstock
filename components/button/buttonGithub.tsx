"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function ButtonGithub() {
  return (
    <button
      onClick={async () => {
        await signIn();
      }}
    >
      test
    </button>
  );
}
