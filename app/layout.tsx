import './globals.css';import type { Metadata } from 'next';
export const metadata:Metadata={title:'Absensi Kelas',description:'Aplikasi absensi kelas'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
