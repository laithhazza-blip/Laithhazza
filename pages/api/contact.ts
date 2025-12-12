import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
  try { await transporter.sendMail({ from: `"${name}" <${email}>`, to: process.env.SMTP_USER, subject: `[Contact] ${subject || 'رسالة جديدة'}`, text: message, html: `<p>${message.replace(/\n/g,'<br/>')}</p><p>البريد: ${email}</p>` }); res.status(200).json({ ok: true }); } catch (err:any) { console.error(err); res.status(500).json({ error: err.message || 'Failed to send' }); }
}
