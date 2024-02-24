import React from "react";

type Props = {
  children?: React.ReactNode;
  src: string;
};
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
export default function WechatDialog({ src }: Props) {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full">
          <Button
            className={cn(
              "w-full rounded bg-primary px-3 py-2 text-center font-medium text-slate-50 transition-all duration-150 ",
            )}
          >
            购买
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>付款完成后, 请加下方 Sora 官方微信账号</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col">
            <img src={src} alt="wechat" width={300} height={300} />
            <img
              src="/wechat-personal.jpg"
              alt="wechat"
              width={300}
              height={300}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
