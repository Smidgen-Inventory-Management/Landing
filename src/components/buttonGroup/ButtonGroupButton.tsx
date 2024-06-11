interface ButtonGroupProps {
  disabled: boolean;
  label: string;
  action: () => void;
  [key: string]: any;
}

const ButtonGroupButton: React.FC<ButtonGroupProps> = ({
  disabled,
  label,
  action,
  ...rest
}) => {
  return (
    <button
      onClick={() => action()}
      disabled={disabled}
      aria-label={label}
      className="button-group-button"
      {...rest}
    >
      {label}
    </button>
  );
};

export { ButtonGroupButton };
