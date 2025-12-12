# Techno Light — موقع شخصي (Next.js + Supabase)

هذا الريبو يحتوي على مشروع كامل لموقع شخصي باسم Techno Light مبني بـ Next.js + TypeScript + TailwindCSS، متصل بـ Supabase، وجاهز للنشر على Vercel.

## محتويات مهمة
- مجلد sql/ يحتوي على سكيمات قاعدة البيانات لـ Supabase
- مجلد public/ يحتوي على شعارات وصور تجريبية وملف السيرة (placeholder)
- صفحات Next.js في مجلد pages/ مع لوحة تحكم dashboard/

## تشغيل محلي
1. انسخ `.env.example` إلى `.env.local` واملأ مفاتيح Supabase و SMTP.
2. npm install
3. npm run dev

## النشر
- ربط المستودع بمشروع Vercel وإعداد متغيرات البيئة كما في `.env.example`.
