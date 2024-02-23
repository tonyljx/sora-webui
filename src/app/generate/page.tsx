import Footer from "@/components/footer";
import Header from "@/components/header";
import VideoInput from "@/components/video-input";

export default function Home() {
  return (
    <main className="container relative flex min-h-[95vh] flex-col space-y-6">
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

      <div className="flex flex-1 flex-col items-center gap-3">
        <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
          Sora Video Generation
        </h1>

        <VideoInput />
      </div>

      {/* <Footer /> */}
    </main>
  );
}
