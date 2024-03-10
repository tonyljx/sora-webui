"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import Header from "@/components/header";
import toast, { Toaster } from "react-hot-toast";
import { FAQ } from "./_component/faq";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  phone: z.string().min(4, {
    message: " 需要提供手机号后 4 位",
  }),
  prompt: z.string().min(5, {
    message: "描述太短了,最少需要 5 字符",
  }),
});

export default function SubmitPage() {
  const [submitLoading, setSubmitLoading] = useState(false);

  console.log(submitLoading);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitLoading(true);

    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("报错了");
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        toast.success("提交成功");
      })
      .catch((error) => {
        console.error(error);
        toast.error("有报错,请稍候尝试");
      })
      .finally(() => {
        setSubmitLoading(false); // 完成后停止加载，无论成功或失败
      });
  }

  return (
    <div className="container relative  min-h-[85vh]   space-y-14">
      <Toaster />
      <Header />

      <h2 className="text-center text-3xl font-bold tracking-tighter">
        表单提交
      </h2>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto max-w-xl space-y-6 border px-4 py-6"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>手机号后四位</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    提供手机号后 4 位,让我们可以后台生成后及时发送给您
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>视频文案描述</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    请可能的提供详细的视频文案生成, 越详细的描述, 效果会越好
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormControl>
              <Button
                disabled={submitLoading}
                className={cn("flex w-full gap-3", {
                  "cursor-not-allowed": submitLoading,
                })}
                type="submit"
              >
                {submitLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                提交
              </Button>
            </FormControl>
          </form>
        </Form>
      </div>

      <FAQ />
    </div>
  );
}
