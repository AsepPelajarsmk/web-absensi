import { redirect } from 'next/navigation';
import { createClient } from './supabase/server';
import type { Profile,Role } from './types';
export async function currentProfile():Promise<Profile|null>{const db=createClient();const {data:{user}}=await db.auth.getUser();if(!user)return null;const {data}=await db.from('users').select('id,nama,email,role,kelas_id,nis').eq('id',user.id).single();return data as Profile|null}
export async function requireRole(role:Role){const p=await currentProfile();if(!p)redirect(`/login/${role.toLowerCase()}`);if(p.role!==role)redirect(p.role==='GURU'?'/guru':'/siswa');return p}
