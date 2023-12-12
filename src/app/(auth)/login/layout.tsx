import { getSessionFromServer } from "@/app/api/auth/[...nextauth]/route";
import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ouranos — Login",
  description: "Your Bluesky web client",
};

export default async function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionFromServer();
  if (session?.user.bskySession) redirect("/dashboard/home");
  
  return (
    <>
      <main className="relative z-10 min-h-[100svh] flex items-center justify-center animate-fade-up animate-delay-500 animate-duration-[700ms]">
        {children}
      </main>
      <Image
        src="/images/loginBackground.svg"
        alt="Numerous ouranos logos"
        width={1000}
        height={200}
        className="z-0 absolute bottom-0 w-screen h-[50svh] object-cover animate-fade-up animate-delay-300 animate-duration-[900ms]"
      />
    </>
  );
}
