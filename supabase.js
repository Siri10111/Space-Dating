import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tuhvfygmvfxicftbtnhn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1aHZmeWdtdmZ4aWNmdGJ0bmhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MzEzMDEsImV4cCI6MjA0NTMwNzMwMX0.hDNmOVEbBwkD2fRJIEH8eks7mneDWaRvWsMhZu1sr3s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);