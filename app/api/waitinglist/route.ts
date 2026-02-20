import { NextResponse } from "next/server";
import { mailer } from "@/lib/mailer";
import waitinglistTemplate from "@/components/templates/waitinglist-template";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";

interface WaitingListRequest {
  role: Role;
  name: string;
  email: string;
  companyName?: string;
  skills?: string[];
}

export async function POST(request: Request) {
  try {
    const body: WaitingListRequest = await request.json();

    const { role, name, email, companyName, skills } = body;

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
    const emailTemplate = waitinglistTemplate(name, email);

    //SEND FORGOT PASSWORD EMAIL
    await mailer(
      email,
      `Linkbits.io | Bevestiging van Linkbits contactverzoek`,
      emailTemplate.html,
      "support@linkbits.io",
    );

    return NextResponse.json(waitinglist);
  } catch (error) {
    console.log("[WAITINGLIST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
