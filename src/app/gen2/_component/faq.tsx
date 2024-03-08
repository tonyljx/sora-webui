import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl font-bold">常见问题解答</h2>
      <Accordion type="single" collapsible className="mx-auto w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger>我如何拿到我生成的视频?</AccordionTrigger>
          <AccordionContent>
            我们生成会在微信联系您, 请您及时留意微信内容
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>视频文案用英文还是中文</AccordionTrigger>
          <AccordionContent>
            推荐使用英文, 但是考虑到用户可能用中文表达的更清楚,
            我们希望您提交中文, 我们会帮助您进行后台优化
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>是实时生成的吗</AccordionTrigger>
          <AccordionContent>
            是的, 目前网页版本在密集开发中, 因为目前需要对接国外的模型,
            工作量较大, 待上线后我们会第一时间通知您
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
