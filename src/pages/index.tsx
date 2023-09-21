import "./PageIndex.style";
import PasswordInput from "@/components/password-input";

export default function Home() {
  const passwordReqs = {
    uppercase: true,
    number: true,
    specialChar: true,
  };

  return (
    <main className="Main">
      <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <PasswordInput options={passwordReqs}></PasswordInput>
      </div>
    </main>
  );
}
