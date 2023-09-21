import styles from "./PageIndex.module.scss";
import PasswordInput from "@/components/password-input";

export default function Home() {
  const passwordReqs = {
    uppercase: true,
    number: true,
    specialChar: true,
  };

  return (
    <main className={styles.Main}>
      <div className={styles.Main_card}>
        <PasswordInput options={passwordReqs}></PasswordInput>
      </div>
    </main>
  );
}
