"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export default function Diagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!ref.current || !chart) return;

      try {
        setError(null);

        // --- SANITIZATION LOGIC ---
        let cleanChart = chart.trim();

        // Remove code blocks if AI included them
        cleanChart = cleanChart
          .replace(/```mermaid/g, "")
          .replace(/```/g, "")
          .trim();

        // Ensure graph LR is at the start if not present
        if (!cleanChart.startsWith("graph")) {
          cleanChart = "graph LR\n" + cleanChart;
        }

        // Replace semicolons with newlines (Mermaid best practice)
        cleanChart = cleanChart.replace(/;/g, "\n");

        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            primaryColor: "#6366F1",
            primaryTextColor: "#F4F4F5",
            primaryBorderColor: "#6366F1",
            lineColor: "#6366F1",
            secondaryColor: "#18181B",
            tertiaryColor: "#1F1F23",
            mainBkg: "#111113",
            nodeBorder: "#6366F1",
            clusterBkg: "#18181B",
            clusterBorder: "#27272A",
            edgeLabelBackground: "#111113",
          },
          securityLevel: "loose",
          fontFamily: "Inter, system-ui, sans-serif",
        });

        // Clear previous content
        ref.current.innerHTML = "";

        // Create a unique ID for each render
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

        const { svg } = await mermaid.render(id, cleanChart);
        ref.current.innerHTML = svg;
      } catch (err: any) {
        console.error("Mermaid error:", err);
        setError("Failed to render diagram. Please check the Mermaid syntax.");
      }
    };

    renderDiagram();
  }, [chart]);

  if (error) {
    return (
      <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl text-red-200 text-sm font-mono shadow-2xl">
        <div className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest text-xs"> Rendering Failed </div>
        {error}
        <pre className="mt-4 p-3 bg-black/40 rounded-lg text-xs overflow-auto max-h-48 text-red-100/50">
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <div className="bg-transparent overflow-auto flex justify-center items-center min-h-[400px] w-full py-12">
      <div ref={ref} className="w-full h-full scale-[1.1] origin-center transition-all duration-700 ease-in-out" />
    </div>
  );
}
