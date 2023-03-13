import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { DraggableIcon } from "../../assets/icons";

import "./styles.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  autoFocus?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  draggable,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    if (draggable) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleLoading}
      className={`button ${variant} ${isLoading && "loading"}`}
      draggable={draggable}
      {...rest}>
      {isLoading && !draggable && (
        <CircularProgress
          size="1.6rem"
          sx={{
            color: "white",
          }}
        />
      )}
      {draggable && (
        <img
          className="draggable-icon"
          src={DraggableIcon}
          alt="draggable icon"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
