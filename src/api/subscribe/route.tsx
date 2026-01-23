import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Marketwise Ninja <no-reply@marketwiseninja.com>",
      to: email,
      subject: "Welcome to Marketwise Ninja 🚀",
      html: `
        <h2>You're subscribed!</h2>
        <p>Thanks for subscribing to Marketwise Ninja.</p>
        <p>We’ll keep you updated with product launches and insights.</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
