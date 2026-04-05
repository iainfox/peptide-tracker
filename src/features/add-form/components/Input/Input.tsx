import { ChangeEventHandler } from "react";
import "./Input.css"

type Props = {
    title?: string;
    id: string;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    type: 'text' | 'number' | 'dropdown';
    value?: string | number;
    placeholder?: string | number;
    units?: string[];
    options?: string[];
};

function Input({
    title,
    id,
    onChange,
    type,
    value,
    placeholder,
    units,
    options
}: Props) {
    return (
        <div className="input-section">
            {title && <span className="label">{title}</span>}

            {type === "dropdown" ? (
                <select className="input dropdown" onChange={onChange}>
                    {options?.map(opt => (
                        <option className="option" key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            ) : (
                <div className="input-group">
                    <input
                        className={"input " + type}
                        id={id}
                        onChange={onChange}
                        type={type}
                        value={value ?? ""}
                        placeholder={placeholder ? String(placeholder) : ""}
                    />

                    {units ? (
                        units.length > 1 ? (
                            <select name="dropdown-unit" className="input dropdown unit">
                                {units.map((opt) => (
                                    <option className="option" key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        ) : (
                            <span className="static-unit">{units[0]}</span>
                        )
                    ) : null}
                </div>
            )}
        </div>
    )
}

export default Input