"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  console.log(pending, "pending");

  return (
    <Button className="w-full font-semibold relative">
      <span className={pending ? "text-transparent" : ""}>Submit</span>
      {pending && (
        <span className="flex items-center justify-center w-full h-full text-gray-400 absolute">
          <LoaderCircle className="animate-spin" />
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
