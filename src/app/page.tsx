import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      Home Page
    </div>
  );
}
