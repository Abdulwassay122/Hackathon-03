import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use your secret key

export async function POST(req:NextRequest) {
    const body = await req.json()
    const {sessionId, order, shipment, cart} = body
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if(session.payment_status === 'paid'){
            const orderResponse = await client.create(order)
            const shipmentResponse = await client.create(shipment)
            cart.map(async(ele:any)=>{
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
