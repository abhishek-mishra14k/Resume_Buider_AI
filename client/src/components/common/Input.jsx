function Input({
    label,
    type = "text",
    name,
    placeholder,
    value,
    onChange,
}) {
    return (
        <div className="mb-5">
            <label className="mb-2 block font-medium">
                {label}
            </label>

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
        </div>
    );
}

export default Input;