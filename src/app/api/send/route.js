import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_7SRLQRVk_NJXHgZy4Bte3xTm7rYsGSwne");

export async function POST(request) {
  const {email, subject, message} = await request.json();
  console.log(request.json())
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