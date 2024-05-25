export default function Select({ title, containerClass, options, onChange }) {
    return (
        <div className={containerClass}>
            <label htmlFor={title} className="block">{title}</label>
            <select
                id={title}
                name={title}
                className={`h-[40px] px-[8px] bg-[#F9F9FB] text-base w-fit outline-0 border border-[#E3E5EB] font-normal rounded-[8px]`}
                onChange={onChange}
            >
                <option value="">--select--</option>
                <option value="">all</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}