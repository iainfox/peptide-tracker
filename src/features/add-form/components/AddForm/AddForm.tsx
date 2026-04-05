import { useRef, useEffect, SetStateAction, Dispatch } from "react";
import "./AddForm.css";

type Props = {
    isVisible: boolean;
    hideAddForm: Dispatch<SetStateAction<boolean>>;
};

function AddForm({ isVisible, hideAddForm }: Props) {
    const isDragging = useRef<boolean>(false);
    const formRef = useRef<HTMLDivElement | null>(null);

    const handlePointerDown = (e: React.PointerEvent<HTMLHRElement>) => {
        e.preventDefault();
        isDragging.current = true;

        formRef.current?.classList.add("dragging");
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            if (!isDragging.current || !formRef.current) return;

            let percent =
                ((e.clientY - 23) / document.body.clientHeight) * 100;

            percent = Math.min(100, Math.max(10, percent));

            formRef.current.style.top = `${percent}%`;
        };

        const handlePointerUp = (_e: PointerEvent) => {
            isDragging.current = false;
            formRef.current?.classList.remove("dragging");

            if (formRef.current) {
                let top = Number.parseFloat(formRef.current.style.top);
                formRef.current.style.top = "";
                if (top > 30) {
                    formRef.current?.classList.remove("visible");
                    hideAddForm(false)
                }
            }
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };
    }, []);

    return (
        <div ref={formRef} className={`add-form ${isVisible ? "visible" : ""}`}>
            <hr
                id="add-form-drag-bar"
                className="large-rule"
                onPointerDown={handlePointerDown}
            />
        </div>
    );
}

export default AddForm;