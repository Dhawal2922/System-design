"use client";

import ReactMarkdown from "react-markdown";
import { Info, List, Server, Activity, Shield, AlertTriangle, Image as ImageIcon, Layers } from "lucide-react";

const icons: Record<string, any> = {
  "Requirements": Info,
  "High-Level Architecture": ImageIcon,
  "Core Components": Server,
  "Scaling Strategy": Activity,
  "Tradeoffs": Shield,
  "Bottlenecks": AlertTriangle,
  "Architecture Diagram": ImageIcon,
  "Real-World Tech Stack": Layers,
};

export default function OutputCard({ title, content }: { title: string; content: string }) {
  const Icon = icons[title] || Info;

  return (
    <div className="group relative bg-[#18181B] border border-[#27272A] p-8 rounded-2xl transition-all duration-300 hover:border-[#6366F1]/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1 overflow-hidden active:scale-[0.99] flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2.5 bg-[#6366F1]/10 rounded-xl text-[#6366F1] border border-[#6366F1]/20">
          <Icon size={22} />
        </div>
        <h2 className="font-semibold text-xl tracking-tight text-[#F4F4F5]">{title}</h2>
      </div>

      <div className={title === "Real-World Tech Stack" ? "flex-1 w-full" : "flex-1 prose prose-invert max-w-none"}>
        {title === "Real-World Tech Stack" ? (
          <div className="whitespace-pre-wrap font-mono text-[13px] text-[#A1A1AA] leading-relaxed transition-colors group-hover:text-[#F4F4F5] bg-[#111113] p-6 rounded-xl border border-[#27272A] shadow-inner h-full">
            {content}
          </div>
        ) : (
          <ReactMarkdown
            components={{
              li: ({ children }) => <li className="mb-2 last:mb-0 text-[#A1A1AA] leading-relaxed list-disc ml-4 font-medium transition-colors group-hover:text-[#F4F4F5]">{children}</li>,
              p: ({ children }) => <p className="mb-4 text-[#A1A1AA] leading-relaxed transition-colors group-hover:text-[#F4F4F5]">{children}</p>,
              strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}