import "../css/components.css"


interface TextInputProps {
  type?: string;
  disabled: boolean;
  placeholder?: string;
  rightAlignedIcon?: boolean;
  label: string;
  supportiveText?: string;
  withIcon: boolean;
  inputType?: string;
}

const TextInput: React.FC<TextInputProps> = ({ inputType="text", withIcon, type, disabled, placeholder, rightAlignedIcon, label, supportiveText }) => {
  return (
    <div className="text-input-container">
      <h4 className="text-input-label">{label}</h4>
      <input disabled={disabled} className={`text-input ${type}`} type={inputType} placeholder={placeholder} />
      {withIcon ? <div className={`foot-${type} ${rightAlignedIcon ? 'icon-right' : ''}`} /> : ''}
      <p className="text-input-subtitle">{supportiveText}</p>
    </div>
  )
}

export default TextInput;