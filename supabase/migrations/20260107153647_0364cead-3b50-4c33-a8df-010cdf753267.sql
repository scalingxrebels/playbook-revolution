-- Drop the insecure public SELECT policy
DROP POLICY IF EXISTS "Allow reading leads for analytics" ON public.playbook_leads;

-- Create new secure policy that only allows admins to read leads
CREATE POLICY "Only admins can read leads"
ON public.playbook_leads
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));