import { Inter } from "next/font/google";
import PasswordInput from "@/components/password-input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const passwordReqs = {
    uppercase: true,
    number: true,
    specialChar: true,
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <PasswordInput options={passwordReqs}></PasswordInput>
      </div>
    </main>
  );
}
