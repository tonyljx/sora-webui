import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
resend.domains.create({ name: "sora.gpthanghai.com" });
export async function POST(request: Request) {
  const requestJson = await request.json();

  // 创建一个新的 Promise 来处理 2 秒的等待
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 等待 2 秒

  try {
    const data = await resend.emails.send({
      from: "sora.gpthanghai.com",
      to: ["1520007808@qq.com"],
      subject: "Hello world",
      text: "Hello world",
      react: EmailTemplate(requestJson),
    });
    return Response.json(data);
    // 模拟数据返回，因为发送邮件逻辑被注释
    // return new Response(
    //   JSON.stringify({ message: "Email sent after 2 seconds" }),
    //   { status: 200 },
    // );
  } catch (error) {
    return Response.json({ error });
  }
}
