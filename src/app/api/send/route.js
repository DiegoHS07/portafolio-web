import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_7SRLQRVk_NJXHgZy4Bte3xTm7rYsGSwne");

export async function POST(req, res) {

  console.log("Diego", req);
  const {body} = await req.json();
  const {email, subject, message} = body;
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['dhiguera09@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Nuevo mensaje enviado: {email}</p>
          <p>{message}</p>
        </>
      )
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}