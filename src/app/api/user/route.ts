import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function GET() {
  const { userId } = await auth();
  const user = await currentUser();
  if (!userId) {
    return NextResponse.json(
      {
        message: "Unauthenticated",
      },
      {
        status: 401,
      }
    );
  }
  return NextResponse.json({
    message: "Authenticated",
    data: { userId, username: user?.username },
  });
}
