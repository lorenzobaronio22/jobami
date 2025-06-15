CREATE TABLE profiles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    maiden_name text,
    address text,
    birth_date text,
    headline text,
    summary text,
    industry text,
    zip_code text,
    geo_location text,
    twitter_handles text[],
    websites text[],
    instant_messengers text[]
);

-- Abilita la Sicurezza a Livello di Riga (RLS) sulla tabella 'profiles'.
-- Questo permette di definire policy per controllare l'accesso ai dati riga per riga.
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Crea una policy per la tabella 'profiles'.
-- Questa policy consente agli utenti autenticati di accedere (leggere, inserire, aggiornare, eliminare)
-- solo ai record del profilo che corrispondono al proprio ID utente.
CREATE POLICY "Gli utenti autenticati possono accedere ai propri profili"
ON profiles FOR ALL -- La policy si applica a tutte le operazioni (SELECT, INSERT, UPDATE, DELETE).
TO authenticated -- La policy si applica solo agli utenti autenticati.
USING (auth.uid() = user_id); -- La condizione di accesso: l'UID dell'utente corrente deve corrispondere al 'user_id' della riga.
