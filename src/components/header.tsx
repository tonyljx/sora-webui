"use client";
import Image from "next/image";
import { Icons } from "./icons";

type Props = {};
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Header({}: Props) {
  return (
    <div className="flex mt-10 justify-between z-10">
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-primary flex gap-2 items-center"
      >
        <img
          width={48}
          height={48}
          src="/logo.webp"
          alt="logo"
          className="rounded"
        />
        Sora Video
      </Link>

      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger className="p-2 hover:bg-slate-200/85 transition-colors duration-150 rounded">
            <Icons.wechat className="w-[24px] h-[24px]" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sora公众号-关注与我们取得联系</DialogTitle>
            </DialogHeader>
            <img src="/wechat2.png" alt="wechat" />
          </DialogContent>
        </Dialog>

        <Button onClick={() => toast.error("暂未支持")}>登录</Button>

        <Toaster />
      </div>
    </div>
  );
}
