"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailPlusIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().min(5, {
    message: "Email must be at least 5 characters.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (messageSent) {
      setOpen(true);

      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        setOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitForm = () => {
    const form = document.forms[0];
    const formData = new FormData(form);

    const formDataObj = {} as { [key: string]: FormDataEntryValue };
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    const baseApiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    fetch(`${baseApiUrl}/contact`, {
      method: "POST",
      body: JSON.stringify(formDataObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        setMessageSent(true);
        setError("");
        form.reset();
      } else {
        setMessageSent(true);
        setError("There was an error sending your message.");
      }
    });
  };

  useEffect(() => {
    if (error.length > 0) return;
    if (open) return;
    setMessageSent(false);
  }, [error, open]);

  return (
    <>
      <h2 className="text-4xl mb-8">Contact Me</h2>
      <div className="flex flex-col gap-8">
        <div>
          <Button asChild variant="ghost" className="items-center">
            <Link href="tel:1-941-416-0937">
              <PhoneIcon />
              Phone: (941) 416-0937
            </Link>
          </Button>
          <p>
            If you would like to contact me via email, please use the form
            below.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(() => submitForm())}
            className="flex flex-col gap-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormDescription className="hidden sr-only">
                    This is your name.
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormDescription className="hidden sr-only">
                    This is your email.
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      {...field}
                      className="min-h-[200px]"
                    />
                  </FormControl>
                  <FormDescription className="hidden sr-only">
                    This is your message.
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground cursor-pointer w-fit"
            >
              <MailPlusIcon /> Send Message
            </Button>
          </form>
        </Form>
      </div>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          console.log(next);
          setOpen(next);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {error.length === 0 ? "Success!" : "Error"}
            </DialogTitle>
            <DialogDescription>
              {error.length === 0
                ? "Your message has been sent successfully."
                : "There was an error sending your message."}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
