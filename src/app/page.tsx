"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  // 创建视频引用
  const videoRef = useRef(null);
  // 切换播放/暂停
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div>
      <section className="h-[100vh]  bg-[color:var(--gray-900)]  relative flex items-center md:-mt-40">
        {/* -mt-64 md:-mt-80 */}
        {/* <Header /> */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://ai-pdf-1259317192.cos.ap-beijing.myqcloud.com/paper-planes.mp4"
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef} // 使用 ref
        ></video>

        <div className="container relative pt-7 pb-9 text-center text-slate-100 font-sans flex gap-8 flex-col ">
          <h1 className="sr-only">Sora</h1>
          <h2 className="scroll-m-20   pb-2  text-3xl md:text-7xl font-semibold tracking-tight first:mt-0">
            通过文本创建视频
          </h2>
          <p className=" w-10/12 max-w-[670px] mx-auto text-xl">
            Sora 是一个 AI 模型，可以根据文本指令创建现实且富有想象力的场景
          </p>
          <Link
            className="bg-[rgba(0,0,0,0.2)] backdrop-blur-md text-slate-100 rounded-full f-body-1   flex items-center py-[13px] px-16 mx-auto w-fit hover:bg-[rgba(255,255,255,0.2)]"
            href="/generate"
          >
            体验Sora模型
          </Link>
        </div>

        <Button
          onClick={togglePlayPause} // 添加点击事件处理函数
          className="absolute z-10 bottom-5  right-5 bg-[rgba(0,0,0,0.2)] backdrop-blur-md text-slate-100 rounded-full f-body-1   flex items-center py-[13px] px-16 mx-auto w-fit hover:bg-[rgba(255,255,255,0.2)]"
        >
          播放/暂停
        </Button>
      </section>
    </div>
  );
}
