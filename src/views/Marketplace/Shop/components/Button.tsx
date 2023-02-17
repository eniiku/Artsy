interface ButtonProps {
  buttonAction: undefined | (() => void);
  type: 'primary' | 'secondary';
  children: string;
  className?: string;
}
const Button = (props: ButtonProps) => {
  const { buttonAction, children, type, className } = props;

  return (
    <button
      className={`font-satoshi text-xl ${className}
        ${
          type === 'primary'
            ? 'bg-blue_clr-700 font-medium text-white py-3 px-16 lg:text-[32px] lg:py-8 lg:px-32 rounded-[4px]'
            : 'text-[#006CA2] underline underline-offset-4 lg:text-[28px]'
        }
      `}
      onClick={buttonAction}
    >
      {children}
    </button>
  );
};

export default Button;
