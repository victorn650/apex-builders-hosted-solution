import { Hono } from "hono";
import { Resend } from "resend";
// @ts-ignore
import { ServiceInquireEmail } from "../src/emails/ServiceInquire.tsx";

type Bindings = {
  RESEND_API_KEY: string;
  MAIL_API_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  bot_honeypot?: string;
};

app.notFound((context) => {
  return context.json(
    {
      error: "Not Found",
    },
    404
  );
});

app.get("/api/health", (context) => {
  return context.json({
    status: "ok",
    service: "Apex Builders API",
    version: "1.0.0",
  });
});

app.post("/api/quote", async (context) => {
  
  try {
    const { req: request, env } = context;
    const body = await request.json() as QuoteRequest;

    // 1. Destructure and validate input parameters
    const { name, email, phone, projectType, message } = body;

    // 2. Anti-spam check: If honeypot is filled, silently reject the bot
    // if (bot_honeypot) {
    //   return new Response(JSON.stringify({ success: true, message: 'Spam blocked.' }), { status: 200 });
    // }

    // 3. Strict server-side validation rules
    if (!name || !email || !projectType || !message) {
      return context.json({ success: false, error: "Missing required fields" }, 400);
    }

    // 4. Securely transmit lead data to an external provider using Cloudflare Environment Variables
    // Example: Forwarding to a CRM or mailing tool via an API key (e.g., Mailgun, SendGrid, Resend)
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'Quotes <onboarding@resend.dev>',
      to: ['nietov650@gmail.com'],
      subject: `New Lead: ${name}`,
      react: ServiceInquireEmail({ name, email, phone, projectType, message })
    });

    if (error) {
      throw new Error(`Failed to forward lead data with error code: ${error.statusCode} - ${error.message}`);
    }

    return context.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    return context.json({ 
      success: false,
      error: "Internal server error processing your quote."
    }, 500);
  }

});

export default app;