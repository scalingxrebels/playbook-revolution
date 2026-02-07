-- Create download_leads table for capturing leads with full UTM tracking
CREATE TABLE public.download_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  asset_id TEXT NOT NULL,
  asset_type TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  page_url TEXT,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.download_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a lead (public form submissions)
CREATE POLICY "Anyone can submit download lead"
ON public.download_leads
FOR INSERT
WITH CHECK (true);

-- Only admins can read leads
CREATE POLICY "Only admins can read download leads"
ON public.download_leads
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update leads
CREATE POLICY "Only admins can update download leads"
ON public.download_leads
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete leads
CREATE POLICY "Only admins can delete download leads"
ON public.download_leads
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster queries
CREATE INDEX idx_download_leads_asset_id ON public.download_leads(asset_id);
CREATE INDEX idx_download_leads_created_at ON public.download_leads(created_at DESC);
CREATE INDEX idx_download_leads_email ON public.download_leads(email);