import { ChangeEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./password-input.module.scss";

interface PasswordOptions {
  length?: number;
  uppercase?: boolean;
  number?: boolean;
  specialChar?: boolean;
}

interface PasswordComponentProps {
  options: PasswordOptions;
}

function PasswordInput({
  options = {
    uppercase: false,
    number: false,
    specialChar: false,
  },
}: PasswordComponentProps) {
  const [password, setPassword] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const length = options.length ? options.length : 8;

  useEffect(() => {
    validatePassword();
  }, [password]);

  const passwordRequirements: string[] = [
    `Password must be at least ${length} characters long`,
    ...(options.uppercase ? ["Has an uppercase letter"] : []),
    ...(options.number ? ["Has a number 0-9"] : []),
    ...(options.specialChar
      ? ["Has one or more of these special characters: !@#$%^&*"]
      : []),
  ];

  const validatePassword = () => {
    const errors: string[] = [];

    if (length && password.length < length) {
      errors.push(`Password must be at least ${length} characters long`);
    }

    if (options.uppercase && !/[A-Z]/.test(password)) {
      errors.push("Has an uppercase letter");
    }

    if (options.number && !/[0-9]/.test(password)) {
      errors.push("Has a number 0-9");
    }

    if (options.specialChar && !/[@#$%^&+=!]/.test(password)) {
      errors.push("Has one or more of these special characters: !@#$%^&*");
    }

    setErrors(errors);
    setValid(errors.length === 0);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword: string = e.target.value;
    setPassword(newPassword);
  };

  return (
    <div className={Styles.PasswordInput}>
      <div className={Styles.PasswordInput_input}>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className={Styles.PasswordInput_info}>
        {passwordRequirements.map((requirement, index) => (
          <div className={Styles.PasswordInput_info_container} key={index}>
            <div className={Styles.PasswordInput_info_container_icon}>
              {errors.includes(requirement) ? (
                <FontAwesomeIcon icon={faCircleXmark} color="red" />
              ) : (
                <FontAwesomeIcon icon={faSquareCheck} color="green" />
              )}
            </div>
            <p className={Styles.PasswordInput_info_container_error}>
              {requirement}
            </p>
          </div>
        ))}
        {valid && <p className="success">Password is strong and valid!</p>}
      </div>
    </div>
  );
}

export default PasswordInput;
