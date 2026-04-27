import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Bot, Sparkles } from "lucide-react";
import axios from "axios";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const API_URL = import.meta.env.VITE_CHATBOT_API_URL || "";

const SUGGESTED_QUESTIONS = [
  "What are Glenson's skills?",
  "Tell me about his projects",
  "How can I contact him?",
];

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isStreaming) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: messageText,
    };

    const currentMessages = [...messages, userMsg];
    setMessages(currentMessages);
    setInput("");
    setIsStreaming(true);

    const assistantId = crypto.randomUUID();

    try {
      const response = await axios.post(
        `${API_URL}/api/chat`,
        {
          message: messageText,
          history: messages.map(({ role, content }) => ({ role, content })),
        },
        {
          responseType: "stream",
          adapter: "fetch",
        }
      );

      const reader = (response.data as ReadableStream<Uint8Array>)?.getReader();
      const decoder = new TextDecoder();

      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            const lastIdx = updated.length - 1;
            updated[lastIdx] = {
              ...updated[lastIdx],
              content: updated[lastIdx].content + chunk,
            };
            return updated;
          });
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again later or reach out through the contact section below! 🙏",
        },
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9000] w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-shadow duration-300"
            aria-label="Open AI chat assistant"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-neutral-950 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9000] w-[calc(100vw-2rem)] sm:w-[400px] h-[min(600px,calc(100dvh-5rem))] sm:h-[min(600px,calc(100vh-6rem))] rounded-2xl overflow-hidden flex flex-col border border-indigo-500/30 bg-neutral-950/90 backdrop-blur-xl shadow-[0_0_60px_rgba(99,102,241,0.15)]"
          >
            {/* Header */}
            <div className="relative flex items-center justify-between px-5 py-4 border-b border-indigo-500/20 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 via-purple-950/40 to-indigo-950/80" />
              <div className="relative flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Ask about Glenson
                  </p>
                  <p className="text-xs text-indigo-300/70">
                    AI Portfolio Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 chat-scrollbar">
              {/* Welcome state */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center px-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center mb-4">
                    <Sparkles size={28} className="text-indigo-400" />
                  </div>
                  <p className="text-white font-semibold mb-1">Hi there! 👋</p>
                  <p className="text-sm text-slate-400 mb-6">
                    I&apos;m Glenson&apos;s AI assistant. Ask me anything about
                    his skills, projects, or experience!
                  </p>
                  <div className="flex flex-col gap-2 w-full">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-left text-sm px-4 py-2.5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 hover:bg-indigo-500/15 hover:border-indigo-400/40 transition-all duration-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Message Bubbles */}
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-2 mt-1 shrink-0">
                      <Bot size={14} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-br-md"
                        : "bg-white/5 border border-indigo-500/10 text-slate-200 rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">
                      {msg.content}
                      {msg.role === "assistant" &&
                        isStreaming &&
                        msg === messages[messages.length - 1] && (
                          <span className="inline-block w-1.5 h-4 bg-indigo-400 ml-0.5 animate-pulse align-middle" />
                        )}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator (before first token arrives) */}
              {isStreaming &&
                messages[messages.length - 1]?.role !== "assistant" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-2 mt-1 shrink-0">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div className="bg-white/5 border border-indigo-500/10 rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0ms]" />
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:150ms]" />
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  </motion.div>
                )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-indigo-500/20 bg-neutral-950/50 shrink-0"
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isStreaming}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-indigo-500/20 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 focus:bg-white/10 transition-all duration-200 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isStreaming}
                  className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 disabled:opacity-30 disabled:hover:bg-indigo-600 transition-all duration-200 shrink-0"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

