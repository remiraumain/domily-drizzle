"use client";

import { useSession } from "next-auth/react";

export default function Test() {
  const session = useSession();
  console.log(session);
  return (
    <main>
      <h1>Login</h1>
      {session.status === "loading" && <p>Loading...</p>}
      {session.status === "unauthenticated" && <p>Not authenticated</p>}
      {session.status === "authenticated" && (
        <p>You are on the login page: {session.data?.user?.firstName}</p>
      )}
    </main>
  );
}
