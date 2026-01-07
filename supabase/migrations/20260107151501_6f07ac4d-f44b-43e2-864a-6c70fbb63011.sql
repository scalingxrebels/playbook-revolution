-- Allow reading leads for dashboard analytics
CREATE POLICY "Allow reading leads for analytics"
ON public.playbook_leads
FOR SELECT
USING (true);