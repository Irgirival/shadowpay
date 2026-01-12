# Contoh Query Supabase (supabase-js)

## 1. Insert User
```js
const { data, error } = await supabase
  .from('users')
  .insert([{ wallet_address: 'GveKc...txez' }]);
```

## 2. Create Payment Link
```js
const { data, error } = await supabase
  .from('payment_links')
  .insert([{ 
    creator_id: userId, 
    link_id: 'abc123', 
    amount: 0.1, 
    token: 'SOL', 
    status: 'active' 
  }]);
```

## 3. Get All Payment Links
```js
const { data, error } = await supabase
  .from('payment_links')
  .select('*')
  .order('created_at', { ascending: false });
```

## 4. Update Payment Link Status
```js
const { data, error } = await supabase
  .from('payment_links')
  .update({ status: 'paid', payment_count: 1 })
  .eq('link_id', 'abc123');
```

## 5. Insert Payment
```js
const { data, error } = await supabase
  .from('payments')
  .insert([{ 
    link_id: paymentLinkId, 
    payer_wallet: 'GveKc...txez', 
    amount: 0.1, 
    tx_hash: '4chhxs2LJ1...1bzvnhsu' 
  }]);
```

## 6. Get User Balance
```js
const { data, error } = await supabase
  .from('balances')
  .select('balance')
  .eq('user_id', userId)
  .single();
```

## 7. Update User Balance
```js
const { data, error } = await supabase
  .from('balances')
  .update({ balance: 1.9 })
  .eq('user_id', userId);
```
