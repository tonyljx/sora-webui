"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import data from "../data/video.json";
import { Video } from "@/types/video";
import { Button } from "./ui/button";
import { Loader2, LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {};

export default function VideoInput({}: Props) {
  const videoArray: Video[] = data;

  const [activePrompt, setActivePrompt] = useState(data[0].prompt);

  const selectVideo = videoArray.find(
    (element) => element.prompt === activePrompt
  );

  const [loading, setLoading] = useState(false);

  const [isVideoShow, setVideoShow] = useState(false);

  const handleGenVideo = () => {
    setLoading(true);
    setVideoShow(false);
    setTimeout(() => {
      setLoading(false);
      setVideoShow(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-3 mt-6 items-center">
      <p>目前还未能自定义输入文本, 后面将支持, 请在下列描述中选择一个🌊</p>
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

      <h2 className="text-3xl font-semibold tracking-tight mt-8">中文提示词</h2>
      <p className="break-words  md:max-w-2xl">{selectVideo?.promptZh}</p>

      <Button
        onClick={handleGenVideo}
        disabled={loading}
        className={cn("self-center flex gap-2", {
          "cursor-not-allowed": loading,
        })}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        生成视频
      </Button>

      {isVideoShow && (
        <video
          poster={selectVideo?.poster}
          src={selectVideo?.src}
          controls
          preload="none"
          muted
          loop
          className="rounded-lg md:w-1/2 sm:w-3/4 mx-auto my-8 shadow"
        ></video>
      )}
    </div>
  );
}
