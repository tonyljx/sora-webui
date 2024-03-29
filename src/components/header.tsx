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
import { useUserStore } from "@/store/user";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export default function Header({}: Props) {
  const { user, resetUser } = useUserStore();
  const router = useRouter();

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

        {user.email && <div> {user.email}</div>}
        {user.email ? (
          <div className="flex items-center gap-2">
            {/* <span className="text-base font-bold">Hi</span> */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                {user?.email && (
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/36184555?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-20">
                <DropdownMenuItem
                  onClick={() => resetUser()}
                  className="cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  登出
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button onClick={() => router.push("/login")}>登录</Button>
        )}
      </div>
    </div>
  );
}
