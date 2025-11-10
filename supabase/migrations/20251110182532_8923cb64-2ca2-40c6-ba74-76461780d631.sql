-- Create table for Open Source Capitalism contributions
CREATE TABLE public.open_source_contributions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  contribution_type TEXT NOT NULL CHECK (contribution_type IN ('code', 'data', 'money', 'advice')),
  link TEXT NOT NULL,
  description TEXT NOT NULL CHECK (char_length(description) <= 200),
  terms_accepted BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create table for Technocratic Democracy applications
CREATE TABLE public.technocracy_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  skills TEXT NOT NULL,
  availability TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('auditor', 'moderator', 'designer', 'participant')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create table for Shared Prosperity & Freedom applications
CREATE TABLE public.prosperity_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('organizer', 'researcher', 'donor', 'tech_volunteer')),
  interest TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.open_source_contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.technocracy_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prosperity_applications ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts (anyone can submit forms)
CREATE POLICY "Anyone can submit open source contributions"
  ON public.open_source_contributions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can submit technocracy applications"
  ON public.technocracy_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can submit prosperity applications"
  ON public.prosperity_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);