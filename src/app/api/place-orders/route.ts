import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia",
  });

  export interface cartItem {
    quantity: number;
    productId: string;
    productName: string;
    description: string;
    category: string;
    price: number;
    totalprice: number;
    image: string;
    color: string;
    size: string;
  }

export async function POST(req:NextRequest) {
    const body = await req.json()
    const {sessionId, order, shipment, cart} = body
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if(session.payment_status === 'paid'){
            await client.create(order)
            await client.create(shipment)
            cart.map(async(ele:cartItem)=>{
                await client.patch(ele.productId).dec({inventory: 1}).commit();
            })
            return NextResponse.json({ Session: session.payment_status, message:'Order Placed Successfully' }, {status:200})
        }
        return NextResponse.json({ Session: session.payment_status, message:'Payment Failed' }, {status:203})
        
    } catch (error) {
        console.error("Error fetching session:", error);
        return NextResponse.json({ Error: 'Error' }, {status:500})
    }
}
