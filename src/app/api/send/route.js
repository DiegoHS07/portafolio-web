import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const {body} = await request.json();
  const {email, subject, message} = await body;
  
  try {
    const data = await resend.emails.send({
      from: 'Portafolio DH <onboarding@resend.dev>',
      to: 'dhiguera09@gmail.com',
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Nuevo mensaje enviado por: {email}</p>
          <p>{message}</p>
        </>
      )
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}