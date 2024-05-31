
import { NextResponse } from "next/server";

export function middleware() {
    if((request.nextUrl.pathname = "/Signup")) {
        return NextResponse.redirect(new URL('Signup', request.URL));    
    }
}

export const config = {    
    matcher: "/Login-form/Signup:path*",
}