import { NextResponse } from "next/server";
import { mailer } from "@/lib/mailer";
import { generateWaitlistEmail } from "@/components/templates/generate-waitlist-email";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { role, name, email, companyName, skills } = await request.json();

    const waitinglist = await prisma.user.create({
      data: {
        role,
        name,
        email,
        companyName,
        skills,
      },
    });

    //GENERATE LINK AND SEND ON MAIL
    const emailHtml = generateWaitlistEmail({
      name,
      email,
      role,
      companyName,
    });

    //SEND FORGOT PASSWORD EMAIL
    await mailer(
      email,
      `AI Support Hub | Bevestiging van inschrijving op de wachtlijst`,
      emailHtml,
      "support@linkbits.io",
    );

    return NextResponse.json(waitinglist);
  } catch (error) {
    console.log("[WAITINGLIST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
