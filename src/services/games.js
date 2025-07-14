import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nduurtfoolnuvavmzmtl.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
console.log(supabaseUrl, supabaseKey)
const supabase = createClient(supabaseUrl, supabaseKey)

const getAll = async () => {
  const { data, error } = await supabase.from('Indies').select()
  if (error) {
    return []
  }
  return data
}

export default { getAll }
