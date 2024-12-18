import { NextRequest, NextResponse } from "next/server";

const chatId = -4507786399;

export const POST = async (request: NextRequest): Promise<Response> => {
  try {
    // const responseAll = await fetch(
    //   "https://api.telegram.org/bot8015378230:AAHUe4n6Gp4t75cImtOg_D_yU_AOU9BeKQU/getHistory",
    //   {
    //     body: JSON.stringify({
    //       chat_id: chatId,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "POST",
    //   }
    // );

    // console.log(await responseAll.json());

    const data = await request.json();
    const keys = Object.keys(data);
    const message = keys.map((item: string) => {
      if (item === "name") {
        return `Jmeno: ${data[item]}`;
      }

      if (item === "email") {
        return `E-mail: ${data[item]}`;
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
          chat_id: chatId,
          text: `RESERVACE №${Date.now()} \n\n ${message.join(
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
