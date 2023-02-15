interface ButtonProps {
  buttonAction: undefined | (() => void);
  type: 'primary' | 'secondary';
  children: string;
}
const Button = (props: ButtonProps) => {
  const { buttonAction, children, type } = props;

  return (
    <button
      className={`font-satoshi text-xl
        ${
          type === 'primary'
            ? 'bg-blue_clr-700 font-medium text-white py-3 px-16 w-fit lg:text-[32px] lg:py-8 lg:px-32 rounded-[4px]'
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
