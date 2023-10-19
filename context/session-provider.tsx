"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

interface SessionProps {
  children: React.ReactNode;
  session?: SessionProviderProps["session"];
}

const Session: React.FC<SessionProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Session;
