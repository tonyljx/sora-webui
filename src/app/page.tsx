"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  // 创建视频引用
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // 切换播放/暂停
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div>
      <section className="relative flex  h-[100vh]  items-center bg-[color:var(--gray-900)] md:-mt-40">
        {/* -mt-64 md:-mt-80 */}
        {/* <Header /> */}
        <video
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
          src="https://ai-pdf-1259317192.cos.ap-beijing.myqcloud.com/paper-planes.mp4"
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef} // 使用 ref
        ></video>

        <div className="container relative flex flex-col gap-8 pb-9 pt-7 text-center font-sans text-slate-100 ">
          <h1 className="sr-only">Sora</h1>
          <h2 className="scroll-m-20   pb-2  text-3xl font-semibold tracking-tight first:mt-0 md:text-7xl">
            通过文本创建视频
          </h2>
          <p className=" mx-auto w-10/12 max-w-[670px] text-xl">
            Sora 是一个 AI 模型，可以根据文本指令创建现实且富有想象力的场景
          </p>
          <Link
            className="f-body-1 mx-auto flex w-fit items-center   rounded-full bg-[rgba(0,0,0,0.2)] px-16 py-[13px] text-slate-100 backdrop-blur-md hover:bg-[rgba(255,255,255,0.2)]"
            href="/generate"
          >
            体验Sora模型
          </Link>
        </div>

        <Button
          onClick={togglePlayPause} // 添加点击事件处理函数
          className="f-body-1 absolute bottom-5  right-5 z-10 mx-auto flex w-fit items-center   rounded-full bg-[rgba(0,0,0,0.2)] px-16 py-[13px] text-slate-100 backdrop-blur-md hover:bg-[rgba(255,255,255,0.2)]"
        >
          播放/暂停
        </Button>
      </section>
    </div>
  );
}
