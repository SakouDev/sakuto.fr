"use client";

import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

export default function Page() {
  const [copiedItem, setCopiedItem] = useState<number | null>(null);

  const items: Item[] = [
    { id: 1, name: "Eligos" },
    { id: 2, name: "Sacred Knight" },
    { id: 3, name: "Ocean Pearl" },
  ];

  const handleCopy = async (id: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopiedItem(id);

      setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-2xl font-bold">
        Item List
      </h1>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <span>{item.name}</span>

            <button
              onClick={() => handleCopy(item.id, item.name)}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              {copiedItem === item.id ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}