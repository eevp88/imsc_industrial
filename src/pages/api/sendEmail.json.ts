import { RESEND as emailConfig } from '@/consts/resend';
import type { APIRoute } from "astro";
import { Resend } from 'resend';

console.log(emailConfig)
const { id , from , to }  = emailConfig

const resend: Resend = new Resend(id);


export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const {  html, subject, text } = body;

  if ( !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "No proporcionó los datos correctos.",
    });
  }

  const send = await resend.emails.send({ from , to, subject, html, text });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "success",
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};



