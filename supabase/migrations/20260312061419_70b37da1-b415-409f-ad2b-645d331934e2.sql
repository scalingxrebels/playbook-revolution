
-- Fix download_leads: Drop all RESTRICTIVE policies and recreate as PERMISSIVE

DROP POLICY IF EXISTS "Anyone can submit download lead" ON public.download_leads;
DROP POLICY IF EXISTS "Only admins can delete download leads" ON public.download_leads;
DROP POLICY IF EXISTS "Only admins can read download leads" ON public.download_leads;
DROP POLICY IF EXISTS "Only admins can update download leads" ON public.download_leads;

CREATE POLICY "Anyone can submit download lead" ON public.download_leads
  FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Only admins can read download leads" ON public.download_leads
  FOR SELECT TO public USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update download leads" ON public.download_leads
  FOR UPDATE TO public USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete download leads" ON public.download_leads
  FOR DELETE TO public USING (has_role(auth.uid(), 'admin'::app_role));

-- Fix user_roles: Drop conflicting RESTRICTIVE policies and recreate as PERMISSIVE

DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;
DROP POLICY IF EXISTS "Authenticated users can view own roles" ON public.user_roles;

CREATE POLICY "Authenticated users can view own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
