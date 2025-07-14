"use client";
import { useState, ReactNode } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username should be at least 2 character" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 character" }),
});

type FormData = z.infer<typeof formSchema>;

interface FormWrapperProps {
  children?: ReactNode;
}

const Login = ({ children }: FormWrapperProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data, "login data");
  };
  return (
    <div className="lg:mx-auto lg:max-w-[500px] lg:min-h-[370px] min-h-[450px] border border-gray-950 lg:mt-20 lg:mb-7 mt-2 mb-5 rounded-xl mx-4 px-4">
      <div className="mt-10">This is the login form</div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-10"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Password"
                      {...field}
                      type={showPassword ? "password" : "text"}
                      className={
                        form.formState.errors.password
                          ? "border border-red-500"
                          : ""
                      }
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col space-y-4">
            <Link href="/register">Don't have any account? Log in</Link>
            <Button
              type="submit"
              className="cursor-pointer"
              disabled={!form.handleSubmit}
            >
              Log in
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
