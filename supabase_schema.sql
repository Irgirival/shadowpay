-- Skema Database ShadowPay (Supabase/PostgreSQL)

-- Tabel Users
CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    wallet_address VARCHAR(64) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabel Payment Links
CREATE TABLE IF NOT EXISTS payment_links (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id uuid REFERENCES users(id),
    link_id VARCHAR(32) UNIQUE NOT NULL,
    amount NUMERIC,
    token VARCHAR(16),
    status VARCHAR(16) DEFAULT 'active',
    payment_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP
);

-- Tabel Payments
CREATE TABLE IF NOT EXISTS payments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    link_id uuid REFERENCES payment_links(id),
    payer_wallet VARCHAR(64),
    amount NUMERIC,
    tx_hash VARCHAR(128),
    paid_at TIMESTAMP DEFAULT NOW()
);

-- Tabel Balances
CREATE TABLE IF NOT EXISTS balances (
    user_id uuid REFERENCES users(id) PRIMARY KEY,
    balance NUMERIC DEFAULT 0,
    updated_at TIMESTAMP DEFAULT NOW()
);
