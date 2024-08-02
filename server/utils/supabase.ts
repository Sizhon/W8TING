import {createClient, SupabaseClient} from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl : string = process.env.SUPABASE_URL!;
const supabaseKey : string = process.env.SUPABASE_ANON_KEY!;
const supabase : SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase
