"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function About() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !mail || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const webhookUrl = "https://discord.com/api/webhooks/1333467924404502609/GDS-JdBTGFEZoRewmh8pwVk4uufJUhIF-f6B-FqulPMBGOcW3CgYE1t2KlUtbYPG4Wv9"; // Replace with your webhook URL

    const payload = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 3447003,
          fields: [
            { name: "Name", value: name },
            { name: "Mail or Discord ID", value: mail },
            { name: "Message", value: message },
          ],
          footer: {
            text: "Contact Form",
          },
        },
      ],
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setMail("");
        setMessage("");
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending the message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-[45vh] bg-neutral-300/30 dark:bg-black/30 p-3 rounded-lg">
      <p className="text-xl font-semibold">Contact me</p>
      <p className="mb-3 text-sm text-neutral-700 dark:text-neutral-400">
        I&apos;ll get back to you as soon as possible!
      </p>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        className="w-full mb-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label htmlFor="mail">Mail or Discord ID</Label>
      <Input
        id="mail"
        className="w-full mb-2"
        type="text"
        placeholder="Mail or discord ID"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        className="w-full mb-2"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button className="mt-2 w-full" onClick={handleSubmit}>
        Send
      </Button>
    </div>
  );
}
