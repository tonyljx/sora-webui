import React from "react";

type Props = {};
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
export default function WechatDialog({}: Props) {
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
            <DialogTitle>Sora公众号-关注与我们取得联系</DialogTitle>
          </DialogHeader>
          <img src="/wechat.jpg" alt="wechat" />
        </DialogContent>
      </Dialog>
    </div>
  );
}