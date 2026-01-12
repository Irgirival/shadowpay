import { supabase } from './supabaseClient';

// Create Payment Link
export async function createPaymentLink({ creator_id, link_id, amount, token }: any) {
  const { data, error } = await supabase
    .from('payment_links')
    .insert([{ creator_id, link_id, amount, token, status: 'active' }]);
  if (error) throw error;
  return data[0];
}

// Get All Payment Links
export async function getAllPaymentLinks() {
  const { data, error } = await supabase
    .from('payment_links')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

// Pay Link
export async function payLink({ link_id, payer_wallet, amount, tx_hash }: any) {
  // Update link status & payment count
  await supabase
    .from('payment_links')
    .update({ status: 'paid', payment_count: supabase.rpc('increment', { x: 1 }) })
    .eq('link_id', link_id);
  // Insert payment
  const { data, error } = await supabase
    .from('payments')
    .insert([{ link_id, payer_wallet, amount, tx_hash }]);
  if (error) throw error;
  return data[0];
}

// Get User Balance
export async function getUserBalance(user_id: string) {
  const { data, error } = await supabase
    .from('balances')
    .select('balance')
    .eq('user_id', user_id)
    .single();
  if (error) throw error;
  return data.balance;
}

// Update User Balance
export async function updateUserBalance(user_id: string, balance: number) {
  const { data, error } = await supabase
    .from('balances')
    .update({ balance })
    .eq('user_id', user_id);
  if (error) throw error;
  return data[0].balance;
}
