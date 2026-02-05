import { getPostHogClient } from "@/lib/posthog-server";

export async function POST(req: Request) {
  const posthog = getPostHogClient();

  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      // Track invalid email attempt
      posthog.capture({
        distinctId: "anonymous",
        event: "subscription_api_error",
        properties: {
          error_type: "invalid_email",
          error_message: "Invalid email format",
        },
      });

      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    // fire & forget
    fetch(process.env.SHEET_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch(() => {});

    console.log("SUBSCRIBE API HIT");

    // Track successful subscription API call
    posthog.capture({
      distinctId: email,
      event: "subscription_api_called",
      properties: {
        source: "api",
      },
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);

    // Track server error
    posthog.capture({
      distinctId: "anonymous",
      event: "subscription_api_error",
      properties: {
        error_type: "server_error",
        error_message: err instanceof Error ? err.message : "Unknown error",
      },
    });

    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
