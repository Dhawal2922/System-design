"use client";

import { useState } from "react";
import { parseSections } from "@/lib/parser";
import OutputCard from "@/components/OutputCard";
import Diagram from "@/components/Diagram";
import { Sparkles, ArrowRight, Loader2, Wand2, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [improving, setImproving] = useState(false);

  const generate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data.result);
    } catch (err) {
      console.error(err);
      alert("Failed to generate design. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  const improve = async () => {
    if (!result) return;
    setImproving(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea: `Improve the following system design and make it more scalable and production-ready:\n\n${result}`,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data.result);
    } catch (err) {
      console.error(err);
      alert("Failed to improve design.");
    } finally {
      setImproving(false);
    }
  };

  const sections = parseSections(result);

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-[#F4F4F5] selection:bg-[#6366F1]/30 selection:text-white">
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-32 space-y-24">
        {/* Header Section */}
        <header className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] rounded-full text-[#A1A1AA] text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles size={14} className="text-[#6366F1]" />
            <span>AI-Powered System Architect</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight bg-linear-to-b from-white to-[#71717A] bg-clip-text text-transparent">
              System Design Copilot
            </h1>
            <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">
              Design production-grade architecture, scaling strategies, and technical documentation with professional-grade precision.
            </p>
          </div>
        </header>

        {/* Hero Input Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#111113] border border-[#27272A] rounded-2xl p-2 focus-within:border-[#6366F1]/50 focus-within:shadow-[0_0_0_1px_#6366F1] shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                className="flex-1 bg-transparent px-6 py-4 text-lg text-[#F4F4F5] placeholder-[#71717A] outline-none"
                placeholder="Design Uber, WhatsApp, or a Video Streaming platform..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generate()}
              />
              <button
                onClick={generate}
                disabled={loading || !idea.trim()}
                className="bg-[#6366F1] hover:bg-[#4F46E5] disabled:opacity-30 disabled:hover:bg-[#6366F1] text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#6366F1]/10"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <span>Generate</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results Sections */}
        {result ? (
          <div className="space-y-24 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-[#18181B] border border-[#27272A] rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center text-[#6366F1] border border-[#6366F1]/20">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#71717A] uppercase tracking-widest">ARCHITECTURAL BLUEPRINT</div>
                  <div className="text-[#F4F4F5] font-medium tracking-tight text-lg">System Layout Generated</div>
                </div>
              </div>
              <button
                onClick={improve}
                disabled={improving}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[#27272A] hover:bg-[#3F3F46] hover:scale-[1.02] text-[#F4F4F5] font-semibold rounded-xl border border-white/5 transition-all duration-200 shadow-lg active:scale-[0.97]"
              >
                {improving ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Wand2 size={20} className="text-[#6366F1]" />
                    <span>Optimize Architecture</span>
                  </>
                )}
              </button>
            </div>

            {/* Diagram Section - Full Width */}
            {sections["Architecture Diagram"] && (
              <section className="space-y-10">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-[#6366F1] rounded-full" />
                  <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5]">Visual Infrastructure</h2>
                </div>
                <div className="bg-[#111113] p-10 rounded-3xl border border-[#27272A] shadow-[0_20px_60px_rgba(0,0,0,0.7)] ring-1 ring-[#6366F1]/10 overflow-hidden">
                  <Diagram chart={sections["Architecture Diagram"]} />
                </div>
              </section>
            )}

            {/* Grid of Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {Object.entries(sections).map(([title, content]) => {
                if (title === "Architecture Diagram") return null;
                return <OutputCard key={title} title={title} content={content} />;
              })}
            </div>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-8 animate-pulse">
            <div className="h-20 w-20 bg-[#6366F1]/5 rounded-3xl flex items-center justify-center border border-[#6366F1]/10">
              <Loader2 className="animate-spin text-[#6366F1]" size={40} />
            </div>
            <div className="text-center space-y-2">
              <p className="font-bold text-[#6366F1] uppercase tracking-[0.2em] text-sm">Building Architecture</p>
              <p className="text-[#71717A] text-lg">Thinking like a Staff Principal Engineer...</p>
            </div>
          </div>
        ) : (
           <div className="max-w-2xl mx-auto py-32 text-center border border-[#27272A] bg-[#111113]/50 rounded-3xl backdrop-blur-sm shadow-inner space-y-8">
             <div className="h-20 w-20 mx-auto bg-[#18181B] rounded-2xl flex items-center justify-center text-[#71717A] border border-[#27272A] shadow-lg">
               <ArrowRight className="-rotate-45" size={32}/>
             </div>
             <div className="space-y-3">
               <p className="text-[#6366F1] text-xs font-bold uppercase tracking-[0.3em]">NEW SESSION READY</p>
               <h2 className="text-3xl font-semibold text-[#F4F4F5]">Start a design project</h2>
               <p className="text-[#A1A1AA] px-10 leading-relaxed max-w-sm mx-auto">Enter a system prompt to generate architectural constraints, scaling strategies, and Mermaid diagrams.</p>
             </div>
           </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-20 border-t border-[#27272A] mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3 text-[#71717A]">
            <div className="h-6 w-6 bg-[#6366F1] rounded-md shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
            <span className="font-bold text-[#F4F4F5]">SYSTEM DESIGN COPILOT</span>
            <span className="text-[#27272A]">/</span>
            <span className="text-xs tracking-widest font-mono">STABLE_V2.0</span>
          </div>
          <div className="flex items-center gap-10 text-[#71717A] text-sm font-medium tracking-tight">
             <a href="#" className="hover:text-[#6366F1] transition-colors duration-200">DOCUMENTATION</a>
             <a href="#" className="hover:text-[#6366F1] transition-colors duration-200">API</a>
             <a href="#" className="hover:text-[#6366F1] transition-colors duration-200">CHANGELOG</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
