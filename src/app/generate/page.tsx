import Footer from "@/components/footer";
import Header from "@/components/header";
import VideoInput from "@/components/video-input";

export default function Home() {
  return (
    <main className="container space-y-6 flex flex-col min-h-[95vh] relative">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.openai.com/tmp/s/paper-planes.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video> */}
      <Header />
      {/* container */}

      <div className="flex flex-col gap-3 items-center flex-1">
        <h1 className=" text-primary scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Sora Video Generation
        </h1>

        <VideoInput />
      </div>

      {/* <Footer /> */}
    </main>
  );
}
