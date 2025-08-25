import type { EBook } from "../types/EBook"; 

const API_URL = import.meta.env.VITE_API_URL;

export async function getAllEBooks(): Promise<EBook[]> {
  const res = await fetch(`${API_URL}/api/v1/ebooks`);
  if (!res.ok) throw new Error("Failed to fetch ebooks");
  return res.json();
}

export async function getEBookById(ISBN: string): Promise<EBook> {
  const res = await fetch(`${API_URL}/api/v1/ebooks/${ISBN}`);
  if (!res.ok) throw new Error("Failed to fetch ebook");
  return res.json();
}

export async function createEBook(data: EBook): Promise<EBook> {
  const res = await fetch(`${API_URL}/api/v1/ebooks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create ebook");
  return res.json();
}
