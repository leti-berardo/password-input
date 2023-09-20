import { useState, ChangeEvent, useEffect } from "react";

interface PasswordOptions {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  specialChar: boolean;
}

interface PasswordComponentProps {
  options: PasswordOptions;
}

const PasswordInput = ({ options }: PasswordComponentProps) => {
  const [password, setPassword] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    validatePassword();
  }, [password]);

  const validatePassword = () => {
    const errors: string[] = [];

    if (options.length && password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }

    if (options.uppercase && !/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }

    if (options.lowercase && !/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }

    if (options.specialChar && !/[@#$%^&+=!]/.test(password)) {
      errors.push(
        "Password must contain at least one special character (e.g., @#$%^&+=!)."
      );
    }

    setErrors(errors);
    setValid(errors.length === 0);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword: string = e.target.value;
    setPassword(newPassword);
  };

  return (
    <div>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {errors.map((error, index) => (
        <p key={index} className="error">
          {error}
        </p>
      ))}
      {valid && <p className="success">Password is strong and valid!</p>}
    </div>
  );
};

export default PasswordInput;
