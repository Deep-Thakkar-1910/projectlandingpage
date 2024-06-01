"use client";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEmailPopup } from "@/hooks/useEmailPopup";
import { useLocalStorage } from "usehooks-ts";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().min(1, "Email is Required").email("Invalid Email"),
});

type InputType = z.infer<typeof formSchema>;

const EmailPopup = () => {
  const isEmailPopupOpen = useEmailPopup((state) => state.isEmailPopupOpen);
  const setEmailPopupClose = useEmailPopup((state) => state.setEmailPopupClose);
  const [_, setEmailRegistered] = useLocalStorage("isEmailRegistered", false);
  // form schema
  const form = useForm<InputType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      const response = await fetch("/api/registeremail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.email),
      });
      const resultData = await response.json();
      if (resultData.success) {
        form.reset();
        toast("Success", {
          position: "top-right",
          description: "Email Registered SuccessFully",
        });
        setEmailRegistered(true);
        setEmailPopupClose();
      } else {
        toast("Error", {
          position: "top-right",
          description: `${resultData.error}`,
        });
        setEmailRegistered(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isEmailPopupOpen} onOpenChange={setEmailPopupClose}>
      <DialogContent className="w-10/12 rounded-lg bg-black/50 backdrop-blur-md sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register Email</DialogTitle>
          <DialogDescription>
            Enter your email address to receive updates and notifications.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Register</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
