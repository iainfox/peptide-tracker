import { useRef, useEffect, SetStateAction, Dispatch } from "react";
import "./AddForm.css";
import InputArea from "../InputArea/InputArea";

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

            <InputArea
                icon={(
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.31 4.691a5.5 5.5 0 0 0-7.78 0l-6.84 6.84a5.5 5.5 0 0 0 3.89 9.39 5.524 5.524 0 0 0 3.89-1.61l6.84-6.84a5.5 5.5 0 0 0 0-7.78Zm-.71 7.07-3.42 3.42L8.82 8.821 12.24 5.4a4.5 4.5 0 0 1 7.68 3.17 4.429 4.429 0 0 1-1.32 3.191Z" />
                    </svg>
                )}
                title={"Peptide Name"}
            />

            <InputArea
                icon={(
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364.058,220.747c0-24.422-16.346-45.099-38.671-51.666v-45.247h10.228c11.151,0,20.19-9.04,20.19-20.19V20.19 
      c0-11.15-9.04-20.19-20.19-20.19H176.384c-11.15,0-20.19,9.04-20.19,20.19v83.454c0,11.151,9.04,20.19,20.19,20.19h10.228v45.247 
      c-22.325,6.566-38.671,27.244-38.671,51.666c0,10.045,0,226.982,0,237.412c0,29.688,24.153,53.841,53.841,53.841h108.436 
      c29.688,0,53.841-24.153,53.841-53.841C364.059,449.927,364.058,241.274,364.058,220.747z M323.677,282.664H188.321v-61.917 
      c0-7.422,6.038-13.46,13.46-13.46h5.021c11.15,0,20.19-9.04,20.19-20.19v-63.262h58.014v63.262c0,11.15,9.04,20.19,20.19,20.19 
      h5.021c7.422,0,13.46,6.038,13.46,13.46V282.664z"/>
                    </svg>
                )}
                title={"Vial Info"}
            />

            <InputArea
                icon={(
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.35354 10.7175C3.37723 11.6938 3.37723 13.2767 4.35354 14.253L5.76776 15.6673C6.74407 16.6436 8.32698 16.6436 9.30329 15.6673L16.2744 8.69611C16.7572 8.21339 17.0215 7.55425 17.006 6.87175L16.9742 5.46465C16.9436 4.11666 15.8497 3.03572 14.5014 3.02138L13.1266 3.00676C12.4543 2.99961 11.8076 3.2635 11.3322 3.73885L4.35354 10.7175ZM14.8602 7.2819L7.88908 14.253C7.69381 14.4483 7.37723 14.4483 7.18197 14.253L5.76776 12.8388C5.57249 12.6436 5.57249 12.327 5.76776 12.1317L12.7464 5.15307C12.8415 5.058 12.9708 5.00522 13.1053 5.00665L14.4801 5.02127C14.7498 5.02414 14.9686 5.24033 14.9747 5.50992L15.0065 6.91703C15.0096 7.05353 14.9568 7.18536 14.8602 7.2819Z" />
                        <path d="M11.0208 11.6066C11.2161 11.8019 11.2161 12.1185 11.0208 12.3137C10.8256 12.509 10.509 12.509 10.3137 12.3137L8.8995 10.8995C8.70424 10.7042 8.70424 10.3877 8.8995 10.1924C9.09476 9.99713 9.41134 9.99713 9.60661 10.1924L11.0208 11.6066Z" />
                        <path d="M5.71751 16.9099C6.10804 17.3004 6.10804 17.9336 5.71751 18.3241C5.32699 18.7146 4.69382 18.7146 4.3033 18.3241L1.47487 15.4957C1.08435 15.1052 1.08435 14.472 1.47487 14.0815C1.8654 13.6909 2.49856 13.6909 2.88909 14.0815L5.71751 16.9099Z" />
                        <path d="M9.38505 16.6709C9.77558 17.0614 9.77558 17.6945 9.38505 18.0851C8.99453 18.4756 8.36137 18.4756 7.97084 18.0851L2.00709 12.1213C1.61656 11.7308 1.61656 11.0976 2.00709 10.7071C2.39761 10.3166 3.03078 10.3166 3.4213 10.7071L9.38505 16.6709Z" />
                        <path d="M13.1421 9.48528C13.3374 9.68055 13.3374 9.99713 13.1421 10.1924C12.9469 10.3877 12.6303 10.3877 12.435 10.1924L11.0208 8.77818C10.8255 8.58292 10.8255 8.26633 11.0208 8.07107C11.2161 7.87581 11.5327 7.87581 11.7279 8.07107L13.1421 9.48528Z" />
                        <path d="M5 16.4142L3.58578 15L5 13.5858L6.41421 15L5 16.4142Z" />
                        <path d="M17.9703 0.970326C18.2632 0.677433 18.7381 0.677433 19.031 0.970326C19.3239 1.26322 19.3239 1.73809 19.031 2.03099L16.031 5.03099C15.7381 5.32388 15.2632 5.32388 14.9703 5.03099C14.6774 4.73809 14.6774 4.26322 14.9703 3.97033L17.9703 0.970326Z" />
                    </svg>
                )}
                title={"Dosage Info"}
            />

            <InputArea
                icon={(
                    <svg className="stroke" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
                title={"Schedule"}
            />
        </div>
    );
}

export default AddForm;