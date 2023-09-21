import { useState, ChangeEvent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="block md:flex">
      <div className="w-1/3">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="w-2/3 px-2">
        {passwordRequirements.map((requirement, index) => (
          <div className="flex my-2" key={index}>
            <div className="w-1/12 flex justify-center">
              {errors.includes(requirement) ? (
                <FontAwesomeIcon icon={faCircleXmark} color="red" />
              ) : (
                <FontAwesomeIcon icon={faSquareCheck} color="green" />
              )}
            </div>
            <p className="error text-xs ml-3 w-11/12">{requirement}</p>
          </div>
        ))}
        {valid && <p className="success">Password is strong and valid!</p>}
      </div>
    </div>
  );
}

export default PasswordInput;
