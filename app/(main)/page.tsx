import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4 w-full">
        <Link href="/register">Register page (temporary)</Link>
        <Link href="/test">Test login page (temporary)</Link>
      </div>
    </main>
  );
}
