import { NextResponse } from 'next/server';import { currentProfile } from '@/lib/auth';export async function GET(){return NextResponse.json(await currentProfile())}
