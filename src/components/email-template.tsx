import * as React from "react";

interface EmailTemplateProps {
  phone: string;
  prompt: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  phone,
  prompt,
}) => (
  <div className="flex flex-col items-center gap-8">
    <h1>Welcome, Sora!</h1>
    <p>用户手机号后四位: {phone}</p>
    <p>用户输入的文案: {prompt}</p>
  </div>
);
