import { ReactElement } from "react";
import "./InputArea.css"

type Props = {
    icon: ReactElement;
    title: string;
}

function InputArea({
    icon,
    title
}: Props) {
    return (
        <div className="input-area">
            <div className="input-area-title">
                {icon}
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default InputArea