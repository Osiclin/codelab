export const Input = ({
  id,
  name,
  placeholder,
  value,
  label,
  onChange,
  type,
  containerClass,
  maxLength,
  defaultValue,
  max,
  min,
  pattern,
  inputMode,
  disabled
}) => {
  return (
    <div className={`${containerClass}`}>
      <label
        htmlFor={id}
        className={`block text-sm text-headers mb-[4px] cursor-default font-medium`}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder ?? ""}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        maxLength={maxLength}
        inputMode={inputMode}
        max={max}
        min={min}
        pattern={pattern}
        aria-labelledby={id}
        onChange={onChange}
        className={`h-[40px] px-[8px] text-base w-full outline-0 border border-[#E3E5EB] font-normal rounded-[8px]`}
      />
    </div>
  )
}
