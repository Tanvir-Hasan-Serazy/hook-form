"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ReactNode } from "react";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "First name must be at least 2 character" })
    .max(20, { message: "First name cannot contain more than 20 character" }),
  lastname: z
    .string()
    .min(2, { message: "Last name must be at least 2 character" })
    .max(20, { message: "last name cannot contain more than 20 character" }),
  username: z.string().min(2, { message: "Username must contain 2 character" }),
  email: z.string().email("Invalid Email."),
  password: z
    .object({
      password: z
        .string()
        .min(6, { message: "password must be at least 6 characters" }),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Password doesn't mactch",
      path: ["password", "confirm"],
    }),
});

type FormData = z.infer<typeof formSchema>;

interface FormWrapperProps {
  children?: ReactNode;
}

const Register = ({ children }: FormWrapperProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: {
        password: "",
        confirm: "",
      },
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };
  return (
    <>
      <div className="pt-4">Register here</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field}></Input>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field}></Input>
                </FormControl>
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
                  <Input placeholder="Enter Your Email." {...field}></Input>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default Register;
