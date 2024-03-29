"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useUserStore();

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("邮箱和密码不能为空, 重新输入");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, action: "query" }),
      });
      if (!res.ok || res.status === 401) {
        const { message } = await res.json();
        toast.error(`登录失败 ${message}`);
      }
      const { data } = await res.json();
      const user = data;
      // 更新全局状态
      setUser({
        email: data?.email,
        id: user?.id,
        name: user?.name,
      });
      toast.success("成功登录, 准备跳回主页面");
      setTimeout(() => {
        router.push("/generate");
      }, 2000);
    } catch (error) {
      toast.error("error login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto mt-[10rem] max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sora人工智能模型</CardTitle>
        <CardDescription>输入你的邮箱和密码</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">邮箱</Label>
            <Input
              id="email"
              type="email"
              placeholder="abc@163.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">密码</Label>
              {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="flex w-full gap-2"
            onClick={handleLogin}
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            登录
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        {/* <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div> */}
      </CardContent>
    </Card>
  );
}
