import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<Response> => {
  try {
    const data = await request.json();
    const keys = Object.keys(data);

    const message = keys.map((item: string) => {
      if (item === "name") {
        return `Jmeno: ${data[item]}`;
      }

      if (item === "email") {
        return `E-mail: ${data[item]}`;
      }

      if (item === "message") {
        return `Zpráva: ${data[item]}`;
      }
    });

    const response = await fetch(
      "https://api.telegram.org/bot8015378230:AAHUe4n6Gp4t75cImtOg_D_yU_AOU9BeKQU/sendMessage",
      {
        body: JSON.stringify({
          chat_id: -4507786399,
          text: `Zpráva kontaktního formuláře \n\n ${message.join(
            "\n\n"
          )} \n===============================`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
};
