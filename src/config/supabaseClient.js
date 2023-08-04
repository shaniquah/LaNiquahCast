/* This code is setting up a connection to a Supabase database using the Supabase JavaScript library. */
/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://zypoxsrnkjumhgmhowsb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cG94c3Jua2p1bWhnbWhvd3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5ODM4MTMsImV4cCI6MjAwNjU1OTgxM30.UmsJU-2p_H2z0GuDWMuKpmeNszdgoikLverW1Ne2FCE"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase