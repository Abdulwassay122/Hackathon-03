import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia",
  });

export async function POST(req:NextRequest) {
    
    const body = await req.json()
    const {cart} = body

    try {
        if (!cart || !Array.isArray(cart)) {
            return NextResponse.json(
              { error: "Invalid products format" },
              { status: 400 }
            );
          }

          // Create a Stripe Checkout Session with images
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: cart.map((product) => ({
          price_data: {
            currency: "inr",
            product_data: {
              name: product.productName,
              images: [product.image],
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        })),
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/successs?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      });

      return NextResponse.json({ url: session.url, id:session.id, payment_status:session.payment_status });

    } catch (error) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
        );
    }

}