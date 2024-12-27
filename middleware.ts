import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/"]); // Define protected routes

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId } = auth();

    // Redirect unauthorized users to /landing
    if (!userId) {
      return NextResponse.redirect(new URL("/landing", req.url));
    }

    
  }

  return NextResponse.next(); // Allow access for authorized users
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // Match routes as needed
};
