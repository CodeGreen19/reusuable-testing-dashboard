"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { SendIcon } from "lucide-react";
import React, { useState } from "react";

export default function TestingPage() {
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsPending(true);

    try {
      const res = await axios.post("/api/sms", { message });
      console.log(res.data);
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="p-5 space-y-2">
      <Textarea
        placeholder="Enter text..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={sendMessage} disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}{" "}
        <SendIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
