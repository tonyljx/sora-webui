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
import toast from "react-hot-toast";
import Link from "next/link";

export default function Header({}: Props) {
  return (
    <div className="z-10 mt-10 flex justify-between">
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary"
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

      <div className="flex items-center gap-2">
        <Link
          href="/price"
          className="transition-all duration-150 hover:text-primary"
        >
          付款方案
        </Link>
        <Dialog>
          <DialogTrigger className="rounded p-2 transition-colors duration-150 hover:bg-slate-200/85">
            <Icons.wechat className="h-[24px] w-[24px]" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sora公众号-关注与我们取得联系</DialogTitle>
            </DialogHeader>
            <img src="/wechat.jpg" alt="wechat" />
          </DialogContent>
        </Dialog>

        <Button onClick={() => toast.error("暂未支持")}>登录</Button>
      </div>
    </div>
  );
}
