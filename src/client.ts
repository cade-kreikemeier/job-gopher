import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://ymoesikqdsfnkzmimecb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDA2NDgxMiwiZXhwIjoxOTQ5NjQwODEyfQ.4KJOyr6qyVdkxNZTkPv4NSwQIkCDqiyGdxFwnSVbdKY'
);