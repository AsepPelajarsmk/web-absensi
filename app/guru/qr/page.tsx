import { requireRole } from '@/lib/auth';import { TeacherQR } from '@/components/TeacherQR';export default async function QR(){await requireRole('GURU');return <TeacherQR/>}
