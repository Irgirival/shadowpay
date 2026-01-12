// Contoh Backend API (Node.js/Express) untuk ShadowPay
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const app = express();
app.use(express.json());

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Create Payment Link
app.post('/api/payment-link', async (req, res) => {
  const { creator_id, link_id, amount, token } = req.body;
  const { data, error } = await supabase
    .from('payment_links')
    .insert([{ creator_id, link_id, amount, token, status: 'active' }]);
  if (error) return res.status(400).json({ error });
  res.json({ link: data[0] });
});

// Pay Link
app.post('/api/pay', async (req, res) => {
  const { link_id, payer_wallet, amount, tx_hash } = req.body;
  // Update link status & payment count
  await supabase
    .from('payment_links')
    .update({ status: 'paid', payment_count: supabase.raw('payment_count + 1') })
    .eq('link_id', link_id);
  // Insert payment
  const { data, error } = await supabase
    .from('payments')
    .insert([{ link_id, payer_wallet, amount, tx_hash }]);
  if (error) return res.status(400).json({ error });
  res.json({ payment: data[0] });
});

// Get User Balance
app.get('/api/balance/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const { data, error } = await supabase
    .from('balances')
    .select('balance')
    .eq('user_id', user_id)
    .single();
  if (error) return res.status(400).json({ error });
  res.json({ balance: data.balance });
});

// Update User Balance
app.post('/api/balance', async (req, res) => {
  const { user_id, balance } = req.body;
  const { data, error } = await supabase
    .from('balances')
    .update({ balance })
    .eq('user_id', user_id);
  if (error) return res.status(400).json({ error });
  res.json({ balance: data[0].balance });
});

module.exports = app;
