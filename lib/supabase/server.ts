import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
type CookieItem={name:string;value:string;options:Record<string,unknown>};
export function createClient(){const jar=cookies();return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{cookies:{getAll(){return jar.getAll()},setAll(items:CookieItem[]){try{items.forEach(({name,value,options})=>jar.set(name,value,options))}catch{}}}})}
