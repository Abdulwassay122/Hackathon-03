import { verifyToken } from "@/app/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";


export  function POST(req:NextRequest) {
    try {
      const user = verifyToken(req);
      return NextResponse.json({ message: 'Protected data', user },{status:200});
    } catch (error) {
      return NextResponse.json({ message: (error as Error).message });
    }
  }