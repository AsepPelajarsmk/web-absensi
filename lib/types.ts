export type Role = 'GURU' | 'SISWA';
export type AttendanceStatus = 'HADIR'|'SAKIT'|'IZIN'|'LAINNYA'|'ALPA';
export type Profile = { id:string; nama:string; email:string; role:Role; kelas_id?:string|null; nis?:string|null };
export const statusLabel:Record<AttendanceStatus,string>={HADIR:'Hadir',SAKIT:'Sakit',IZIN:'Izin',LAINNYA:'Kepentingan Lain',ALPA:'Alpa'};
