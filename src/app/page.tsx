"use client";

import { useState } from "react";
import TitlePage from "../components/TitlePage";
import ChatInterface from "../components/ChatInterface";

export default function HomePage() {
  const [apiUrl, setApiUrl] = useState<string>("http://localhost:8000");
  const [hasStartedChat, setHasStartedChat] = useState<boolean>(false);

  // Function to start the chat, passed down to TitlePage
  const startChat = () => {
    setHasStartedChat(true);
  };
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 p-4 md:p-8 ">
      {!hasStartedChat ? (
        <TitlePage
          startChat={startChat}
          apiUrl={apiUrl}
          setApiUrl={setApiUrl}
        />
      ) : (
        <ChatInterface apiUrl={apiUrl} />
      )}
    </main>
  );
}
