import { EventContext  } from "@cloudflare/workers-types";

// Replace 'Record<string, never>' with your specific Environment bindings interface if needed
type MyEnv = {
  RESEND_API_KEY: string;
};

type MyData = Record<string, unknown>;

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  bot_honeypot?: string;
};

export async function onRequestPost(context: EventContext<MyEnv, string, MyData>) {
  try {
    const { request, env } = context;
    const body = await request.json() as QuoteRequest;

    // 1. Destructure and validate input parameters
    const { name, email, phone, projectType, bot_honeypot, message } = body;

    // 2. Anti-spam check: If honeypot is filled, silently reject the bot
    // if (bot_honeypot) {
    //   return new Response(JSON.stringify({ success: true, message: 'Spam blocked.' }), { status: 200 });
    // }

    // 3. Strict server-side validation rules
    if (!name || !email || !projectType || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
    }

    // 4. Securely transmit lead data to an external provider using Cloudflare Environment Variables
    // Example: Forwarding to a CRM or mailing tool via an API key (e.g., Mailgun, SendGrid, Resend)
    const externalApiUrl = 'https://resend.com';
    const emailResponse = await fetch(externalApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`, // Kept strictly private on Cloudflare's servers
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Quotes <onboarding@resend.dev>',
        to: ['nietov650+apex@gmail.com'],
        subject: `New Lead: ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
               <p><strong>Service Requested:</strong> ${projectType}</p>`,
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to forward lead data.');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error processing your quote.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}