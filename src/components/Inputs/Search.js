import React from "react"

export default function Search({
    id,
    name,
    placeholder,
    value,
    onChange,
    readOnly,
    defaultValue,
    containerClass
}) {
    return (
        <div className={containerClass}>
            <input
                id={id}
                name={name}
                type="search"
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                aria-labelledby={id}
                onChange={onChange}
                readOnly={readOnly}
                className={`
                h-[40px] pl-[40px] pr-[8px] bg-[#F9F9FB]
                text-base w-full outline-0 border border-[#E3E5EB] font-normal
                rounded-[8px]
                `}
            />
        </div>
    )
}
