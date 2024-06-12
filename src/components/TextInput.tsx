import '../css/components.css';

enum TextInputCategory {
  info = "info",
  text = "text",
  password = "password",
  loading = "loading",
  success = "success",
  warning = "warning",
  error = "error"
}

interface TextInputProps {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  rightAlignedIcon?: boolean;
  label: string;
  supportiveText?: string;
  withIcon?: boolean;
  inputType?: TextInputCategory;
  autoComplete?: string;
  textArea?: boolean;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  autoComplete,
  inputType = TextInputCategory.info,
  withIcon,
  type = 'info',
  disabled = false,
  placeholder,
  rightAlignedIcon,
  label,
  supportiveText,
  textArea,
  className,
}) => {
  return (
    <div className={`text-input-container ${className}`}>
      <h4 aria-hidden={true} className="text-input-label">
        {label}
      </h4>
      {textArea ? (
        <>
          <textarea
            autoComplete={autoComplete}
            disabled={disabled}
            className={`text-input ${type}`}
            aria-label={label}
            placeholder={placeholder}
          />
          {withIcon ? (
            <div
              className={`foot-${type} ${rightAlignedIcon ? 'icon-right' : ''}`}
            />
          ) : null}
          {supportiveText ? (
            <p className="text-input-subtitle" aria-hidden={true}>
              {supportiveText}
            </p>
          ) : null}
        </>
      ) : (
        <>
          <input
            autoComplete={autoComplete}
            disabled={disabled}
            className={`text-input ${type}`}
            type={inputType}
            aria-label={label}
            placeholder={placeholder}
          />
          {withIcon ? (
            <div
              className={`foot-${type} ${rightAlignedIcon ? 'icon-right' : ''}`}
            />
          ) : null}
          {supportiveText ? (
            <p className="text-input-subtitle" aria-hidden={true}>
              {supportiveText}
            </p>
          ) : null}
        </>
      )}
    </div>
  );
};

export { TextInput, TextInputCategory };
