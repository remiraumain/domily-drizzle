import { db } from "@/db/connect";
import { users } from "@/db/schema/auth";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, password } = body;

  if (!firstName) {
    return new NextResponse("Missing first name", { status: 400 });
  }

  if (!lastName) {
    return new NextResponse("Missing last name", { status: 400 });
  }

  if (!email || !password) {
    return new NextResponse("Missing email or password", { status: 400 });
  }

  const exist = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (exist) {
    return new NextResponse("User already registered", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = uuidv4();
  const user = await db
    .insert(users)
    .values({
      id: userId,
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

  return NextResponse.json(user);
}
