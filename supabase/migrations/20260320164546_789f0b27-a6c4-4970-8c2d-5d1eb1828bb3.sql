INSERT INTO content_visibility (content_type, content_id, hidden)
VALUES ('solution', 'revenue-architecture-system', false)
ON CONFLICT (content_type, content_id) DO UPDATE SET hidden = false;