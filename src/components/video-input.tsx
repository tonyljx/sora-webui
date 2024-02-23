"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import data from "../data/video_modified.json";
import { Video } from "@/types/video";
import { Button } from "./ui/button";
import { Loader2, LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";

import { redirect, useRouter } from "next/navigation";
type Props = {};

import { useUsageStore } from "@/store/usage";

export default function VideoInput({}: Props) {
  const videoArray: Video[] = data;

  const [activePrompt, setActivePrompt] = useState(data[0].prompt);

  const selectVideo = videoArray.find(
    (element) => element.prompt === activePrompt,
  );

  const [loading, setLoading] = useState(false);

  const [isVideoShow, setVideoShow] = useState(false);

  // const [usage, setUsage] = useState(3);
  const usage = useUsageStore((s) => s.usage);
  const usageDesc = useUsageStore((s) => s.descrease);

  const handleGenVideo = () => {
    setLoading(true);
    setVideoShow(false);

    setTimeout(() => {
      setLoading(false);
      setVideoShow(true);
      if (usage - 1 >= 0) {
        const videoStr = `视频生成成功,点击播放键播放即可,剩余试用次数 ${usage - 1}`;
        toast.success(videoStr);
      } else {
        toast.error("试用次数用尽, 即将跳转到付款页");
        router.push("/price");
      }
      usageDesc(1);
    }, 2000);
  };

  const router = useRouter();

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      <p>
        目前还未支持自定义输入文本，但我们将在未来版本更新中加入此功能。敬请期待！
      </p>
      <Select
        defaultValue={activePrompt}
        onValueChange={(v) => {
          setActivePrompt(v);
          setVideoShow(false);
        }}
      >
        <SelectTrigger className="max-w-xl">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="max-w-2xl">
          {videoArray.map((item) => (
            <SelectItem
              key={item.poster}
              value={item.prompt || "a"}
              className="max-w-2xl"
            >
              {item.promptZh}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
        英文提示词
      </h2>
      <p className="break-words  md:max-w-2xl">{selectVideo?.prompt}</p>

      <h2 className="mt-8 text-3xl font-semibold tracking-tight">中文提示词</h2>
      <p className="break-words  md:max-w-2xl">{selectVideo?.promptZh}</p>

      <Button
        onClick={handleGenVideo}
        disabled={loading}
        className={cn("flex gap-2 self-center", {
          "cursor-not-allowed": loading,
        })}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        生成视频
      </Button>

      {isVideoShow && (
        <video
          poster={selectVideo?.poster}
          src={selectVideo?.srcZh}
          controls
          preload="none"
          muted
          loop
          className="mx-auto my-8 rounded-lg shadow sm:w-3/4 md:w-1/2"
        ></video>
      )}
      <Toaster />
    </div>
  );
}
