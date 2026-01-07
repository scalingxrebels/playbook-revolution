-- Create leads table for playbook downloads
CREATE TABLE public.playbook_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  source TEXT DEFAULT 'playbook_download',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.playbook_leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads (anyone can submit their email)
CREATE POLICY "Anyone can submit a lead" 
ON public.playbook_leads 
FOR INSERT 
WITH CHECK (true);

-- Create index for faster email lookups
CREATE INDEX idx_playbook_leads_email ON public.playbook_leads(email);

-- Create index for analytics by date
CREATE INDEX idx_playbook_leads_created_at ON public.playbook_leads(created_at);