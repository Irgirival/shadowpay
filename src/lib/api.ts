// src/lib/api.ts

export async function fetchPrivateBalance(user_id: string): Promise<number> {
  const res = await fetch(`/api/balance?user_id=${user_id}`);
  if (!res.ok) throw new Error("Failed to fetch balance");
  const data = await res.json();
  return data.balance;
}

export async function withdrawFromBackend(opts: { user_id: string; amount: number; token: string; recipient: string }): Promise<{ success: boolean; txHash?: string; error?: string }> {
  const res = await fetch(`/api/withdraw`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opts),
  });
  if (!res.ok) return { success: false, error: "Failed to withdraw" };
  return res.json();
}
