import "../css/components.css"
import ButtonGroupButton from "./ButtonGroupButton";



export interface ButtonProps {
  label: string;
  action: () => void;
  disabled: boolean;
}

interface ButtonGroupProps {
  buttons: ButtonProps[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="button-group-container">
      {buttons.map((button, index) => (
        <ButtonGroupButton
          key={index}
          disabled={button.disabled}
          label={button.label}
          action={button.action}
        />
      ))}

    </div>
  );
};

export default ButtonGroup;