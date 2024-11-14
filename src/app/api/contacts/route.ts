import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<Response> => {
  try {
    const data = await request.json();
    const keys = Object.keys(data);
    const message = keys.map((item: string) => {
      if (item === "name") {
        return `Jmeno: ${data[item]}`;
      }

      if (item === "phone") {
        return `Telefonní číslo: ${data[item]}`;
      }

      if (item === "date") {
        return `Datum: ${data[item]}`;
      }

      if (item === "time") {
        return `Čas: ${data[item]}`;
      }

      if (item === "guests") {
        return `Počet osob: ${data[item]}`;
      }

      if (item === "children" && data[item] > 0) {
        return `Počet dětí: ${data[item]}`;
      }
    });

    const response = await fetch(
      "https://api.telegram.org/bot8015378230:AAHUe4n6Gp4t75cImtOg_D_yU_AOU9BeKQU/sendMessage",
      {
        body: JSON.stringify({
          chat_id: -4507786399,
          text: `RESERVACE №10 \n\n ${message.join("\n\n")} \n===============================`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    console.log(response);

    return NextResponse.json({ name: "Hello" });
  } catch (error) {
    return NextResponse.json({ name: "Hello" });
  }
};
