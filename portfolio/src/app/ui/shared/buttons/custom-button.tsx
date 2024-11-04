/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */

export default function CustomButton({
  disabled = false,
  className,
  children,
  handleClick,
  buttonType = "button",
}: CustomButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`nunito-r-8 bg-white text-[#0a0a0a] p-4 hover:bg-[#0a0a0a] border hover:text-green-500 not-sr-only hover:border-green-500 hover:border transition-all duration-200 ${className}`}
      type={buttonType}
    >
      {children}
    </button>
  );
}

type CustomButtonProps = {
  children: React.ReactNode | string | JSX.Element;
  inverted?: boolean;
  url?: string;
  customStyle?: string;
  handleClick?: any;
  disabled?: boolean;
  buttonType?: "button" | "submit" | "reset" | undefined;
  className?: string;
};
