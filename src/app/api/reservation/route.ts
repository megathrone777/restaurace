import { NextRequest, NextResponse } from "next/server";

// interface TChatItem {
//   message?: {
//     text?: string;
//   };
// }

const chatId = -1002331831164;

export const POST = async (request: NextRequest): Promise<Response> => {
  try {
    // const responseAll = await fetch(
    //   "https://api.telegram.org/bot8015378230:AAHUe4n6Gp4t75cImtOg_D_yU_AOU9BeKQU/getUpdates"
    // );

    // if (responseAll.ok) {
    //   const dataAll = await responseAll.json();
    //   const items: string[] = [];

    //   for (const item of dataAll.result as TChatItem[]) {
    //     if (item.message && item.message.text) {
    //       items.push(item.message.text);
    //     }
    //   }

    //   console.log(items, "ITEMS");
    // }

    // return;

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

/*
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import moment from "moment";

interface TReservation {
  date: string;
  email: string;
  time: string;
}

const chatId: number = -1002331831164;

export const POST = async (request: NextRequest): Promise<Response> => {
  try {
    const data = await request.json();
    const keys = Object.keys(data);
    const dayToday = moment().format("YYYY-MM-DD");
    const fileContents = await fs.readFile("orders.json");
    const items = JSON.parse(fileContents.toString()) as TReservation[];

    console.log(dayToday, data.date);

    const hasReservation: boolean = items.some(
      ({ date, email, time }: TReservation) =>
        date === dayToday && email === data.email && time === data.time
    );

    console.log(hasReservation, "HAS RESERVATION");

    return;

    // fs.appendFile("orders.json", JSON.stringify([...items]));

    // return;

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
      const fileContents = await fs.readFile("orders.json");
      const items = JSON.parse(fileContents.toString()) as string[];

      fs.writeFile(
        "orders.json",
        JSON.stringify([
          ...items,
          {
            date: data.date,
            email: data.email,
            phone: data.phone,
            time: data.time,
          },
        ])
      );

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
};

*/