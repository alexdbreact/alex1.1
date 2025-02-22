import dbConnect from "@/lib/dbConnect";
import All from "@/models/Alls";
import { NextResponse } from "next/server";


 

export async function POST(request) {
    const {titles, details, place,tashera, image, files, refer} = await request.json();
    await dbConnect();
    await All.create({titles, details, place,tashera, image, files, refer});
    return NextResponse.json({ message: "all Created" }, { status: 201 });
}

 

