// Pay a link (stub, to be implemented)
export async function payLink(linkId: string, payer_wallet: string, amount: number, tx_hash?: string): Promise<{ success: boolean }> {
  // TODO: Implement payment logic with Supabase
  // Example: call a supabasePayment.payLink function
  return { success: true };
}
import { createPaymentLink, getAllPaymentLinks } from './supabasePayment';
import { PaymentLink, AmountType, LinkUsageType, Token } from './types';

export async function createPrivateLink(opts: {
  amount?: string;
  token?: string;
  amountType?: AmountType;
  linkUsageType?: LinkUsageType;
  expiresIn?: number; // milliseconds, optional
  creator_id: string;
}): Promise<PaymentLink> {
  const linkId = Math.random().toString(36).slice(2, 9);
  const url = `${window.location.origin}/pay/${linkId}`;
  await createPaymentLink({
    creator_id: opts.creator_id,
    link_id: linkId,
    amount: opts.amount,
    token: (opts.token || 'SOL') as Token,
  });
  return {
    linkId,
    url,
    amountType: opts.amountType || 'fixed',
    linkUsageType: opts.linkUsageType || 'one-time',
    amount: opts.amount,
    token: (opts.token || 'SOL') as Token,
    status: 'active',
    createdAt: Date.now(),
    paymentCount: 0,
    expiresAt: opts.expiresIn ? Date.now() + opts.expiresIn : undefined
  };
}

export async function getLinkDetails(linkId?: string | null): Promise<PaymentLink | null> {
  if (!linkId) return null;
  const links = await getAllPaymentLinks();
  return links.find((l: any) => l.linkId === linkId) || null;
}

// ...existing code...
