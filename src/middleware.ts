import { useCartContext } from "@/app/Contexts/CartContext";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";



export function middleware(req:NextRequest){

    const token = cookies().get('token')?.value


    const isAuthenticated = token;

    const { pathname } = req.nextUrl;

    if(!isAuthenticated && pathname === '/profile') {
        console.log('not authenticated')
        return NextResponse.redirect(new URL('/login', req.url));
    }
    if(!isAuthenticated && pathname === '/orders' ){
        console.log('not authenticated')
        return NextResponse.redirect(new URL('/login', req.url));
    }
    if(!isAuthenticated && pathname === '/checkout' ){
        console.log('not authenticated')
        return NextResponse.redirect(new URL('/login', req.url));
    }
    if(isAuthenticated && pathname === '/verify'){
        console.log('not authenticated')
        return NextResponse.redirect(new URL('/login', req.url));
    }
    
    if(isAuthenticated && pathname === '/login'){
        console.log('authenticated')
        return NextResponse.redirect(new URL('/', req.url));
    }
    if(isAuthenticated && pathname === '/joinus'){
        console.log('authenticated')
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();

}