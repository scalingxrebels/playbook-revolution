CREATE TABLE public.ras_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  current_cac TEXT NOT NULL,
  gtm_challenge TEXT NOT NULL,
  source_channel TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  page_url TEXT,
  referrer TEXT
);

ALTER TABLE public.ras_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit RAS application"
  ON public.ras_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only admins can read RAS applications"
  ON public.ras_applications
  FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update RAS applications"
  ON public.ras_applications
  FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete RAS applications"
  ON public.ras_applications
  FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));