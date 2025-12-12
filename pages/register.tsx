import { supabase } from '../lib/supabaseClient';
import { useState } from 'react';
import Router from 'next/router';

export default function Register(){ const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); async function handleSignUp(e:any){ e.preventDefault(); const { data, error } = await supabase.auth.signUp({ email, password }, { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard` }); if(error) alert(error.message); else { alert('تم إرسال رابط التأكيد إلى بريدك (إن وُجد).'); Router.push('/'); } } return (<div className="max-w-md mx-auto p-6 border rounded"><h2 className="text-xl font-bold mb-4">إنشاء حساب</h2><form onSubmit={handleSignUp} className="space-y-4"><input required type="email" placeholder="البريد الالكتروني" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 border rounded" /><input required type="password" placeholder="كلمة المرور" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-3 border rounded" /><button className="w-full bg-primary text-white p-3 rounded">تسجيل</button></form></div>);
}
