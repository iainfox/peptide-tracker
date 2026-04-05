import { ReactElement, ReactNode } from "react";
import "./InputArea.css";

type Props = {
    icon: ReactElement;
    title: string;
    children?: ReactNode;
};

function InputArea({ icon, title, children }: Props) {
    return (
        <div className="input-area">
            <div className="input-area-title">
                {icon}
                <h2>{title}</h2>
            </div>
            <div className="input-area-content">{children}</div>
        </div>
    );
}

export default InputArea;