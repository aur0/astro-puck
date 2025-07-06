import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const projectId = import.meta.env.PROJECT_ID;

/**
 * Fetch page data where project_id = 'project-1' and path = '/'
 */
export async function getRootPage() {
  const { data, error } = await supabase
    .from('pages')
    .select('data')
    .eq('project_id', projectId)
    .eq('path', '/')
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
