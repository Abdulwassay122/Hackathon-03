import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    cookies().delete("token"); // Delete the token cookie

    return NextResponse.json({ message: "Cookie deleted" });
}