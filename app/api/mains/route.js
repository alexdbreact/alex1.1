import dbConnect from "@/lib/dbConnect";
import Main from "@/models/Mains";
import { NextResponse } from "next/server";

 


 


export async function POST(request) {
    const { tit, summ, start, tash, start2, tash2, start3, tash3, image, files, refer } = await request.json();
    await dbConnect();
    await Main.create({ tit, summ, start, tash, start2, tash2, start3, tash3, image, files, refer });
    return NextResponse.json({ message: "Main Created" }, { status: 201 });
  }
