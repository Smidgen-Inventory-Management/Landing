
interface ButtonGroupProps {
  disabled: boolean;
  label: string;
  action: () => void;
}


const ButtonGroupButton: React.FC<ButtonGroupProps> = ({ disabled, label, action }) => {
  return (
    <button onClick={() => action()} disabled={disabled} className="button-group-button">
      {label}
    </button>
  );
};

export default ButtonGroupButton;