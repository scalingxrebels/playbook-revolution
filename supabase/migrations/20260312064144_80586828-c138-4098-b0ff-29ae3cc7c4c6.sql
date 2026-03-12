
CREATE TABLE public.content_visibility (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_type text NOT NULL,
  content_id text NOT NULL,
  hidden boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id),
  UNIQUE(content_type, content_id)
);

ALTER TABLE public.content_visibility ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins full access" ON public.content_visibility
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can read visibility" ON public.content_visibility
  FOR SELECT TO anon, authenticated
  USING (true);
