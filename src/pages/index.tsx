import { useState } from "react";
import styles from "./PageIndex.module.scss";
import PasswordInput from "@/components/password-input";

export default function Home() {
  const [passLength, setPassLength] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [specialChar, setSpecialChar] = useState(true);

  const passwordReqs = {
    length: passLength,
    uppercase: uppercase,
    number: number,
    specialChar: specialChar,
  };

  return (
    <main className={styles.Main}>
      <div className={styles.Main_inputPropsTest}>
        <div>
          <input
            type="checkbox"
            name="Uppercase"
            id="uppercase"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          <label htmlFor="uppercase">Require Uppercase</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Number"
            id="number"
            checked={passwordReqs.number}
            onChange={() => setNumber(!number)}
          />
          <label htmlFor="number">Require Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Special Character"
            id="special-character"
            checked={passwordReqs.specialChar}
            onChange={() => setSpecialChar(!specialChar)}
          />
          <label htmlFor="special-character">Require Special Characters</label>
        </div>
        <div>
          <label htmlFor="characters">
            Select the min amount of characters
          </label>
          <input
            id="characters"
            type="number"
            min={8}
            defaultValue={passLength}
            onChange={(e) => setPassLength(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className={styles.Main_card}>
        <PasswordInput options={passwordReqs}></PasswordInput>
      </div>
    </main>
  );
}
