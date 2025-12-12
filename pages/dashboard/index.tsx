import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function Dashboard(){ const [user,setUser]=useState<any>(null); useEffect(()=>{ supabase.auth.getUser().then(res => setUser(res.data.user)); },[]); return (<div><h1 className="text-2xl font-bold">لوحة التحكم</h1><p className="mt-3">مرحباً، {user?.email || 'المستخدم'}</p><div className="mt-6 flex gap-4"><Link href="/dashboard/projects"><a className="px-4 py-2 border rounded">إدارة المشاريع</a></Link><Link href="/profile"><a className="px-4 py-2 border rounded">بيانات الحساب</a></Link></div></div>);
}
