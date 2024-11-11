"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createAction } from "@/app/actions";
import { SyntheticEvent, useState } from "react";
import SubmitButton from "@/components/submit-button";
import Container from "@/components/Container";
import Form from "next/form";

export default function NewInvoice() {
  const [formState, setFormState] = useState("ready");

  const handleSubmit = async (event: SyntheticEvent) => {
    if (formState === "pending") {
      event.preventDefault();
      return;
    }
    setFormState("pending");
  };

  return (
    <main>
      <Container>
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Create Invoice</h1>
        </div>
        <Form
          action={createAction}
          onSubmit={handleSubmit}
          className="grid gap-4 max-w-sm"
        >
          <div>
            <Label htmlFor="name" className="block font-semibold mb-2">
              Billing name
            </Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="email" className="block font-semibold mb-2">
              Billing email
            </Label>
            <Input id="email" name="email" type="email" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="value" className="block font-semibold mb-2">
              Value
            </Label>
            <Input id="value" name="value" type="text" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="description" className="block font-semibold mb-2">
              Description
            </Label>
            <Textarea id="description" name="description"></Textarea>
          </div>
          <div>
            <SubmitButton />
          </div>
        </Form>
      </Container>
    </main>
  );
}
