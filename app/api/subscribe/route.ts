export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const webhook = process.env.GOOGLE_SHEET_EMAIL;

    if (!webhook) {
      console.error("GOOGLE_SHEET_EMAIL is missing");
      return Response.json({ error: "Server not configured" }, { status: 500 });
    }

    // Try with redirect following
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      redirect: "follow",
    });

    console.log("Response status:", res.status);
    console.log("Response headers:", Object.fromEntries(res.headers.entries()));

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Google Sheet API error:", res.status, errorText);
      
      // If 401/404, the script URL needs to be redeployed
      if (res.status === 401 || res.status === 404) {
        return Response.json(
          { error: "Google Sheet webhook needs to be redeployed with proper permissions" },
          { status: 500 }
        );
      }
      
      return Response.json({ error: "Failed to save email" }, { status: 500 });
    }

    const responseData = await res.text();
    console.log("Success response:", responseData);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
