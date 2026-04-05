import "./PeptideList.css"
import { Item } from "../../types"
import PeptideItem from "../PeptideItem/PeptideItem";
import { Dispatch, SetStateAction } from "react";

type Props = {
    peptides: Item[];
    showAddForm: Dispatch<SetStateAction<boolean>>;
    onEdit: () => void;
    onDelete: (id: number) => void;
}

function PeptideList({
    peptides,
    showAddForm,
    onEdit,
    onDelete
}: Props) {

    return (
        <ul className="peptide-list">
            <h2 className="peptide-list-title">Peptides</h2>

            <li>
                <div
                    className="peptide-list-item"
                >
                    <span className="label">Add a peptide</span>

                    <div className="button-group">
                        <button aria-label="Add Peptide" className="icon-button" onClick={() => showAddForm(true)}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M6 12H18M12 6V18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                    </div>
                </div>
            </li>

            {peptides.map((peptide) => (
                <li key={peptide.id}>
                    <PeptideItem
                        peptide={peptide}
                        onDelete={() => onDelete(peptide.id)}
                        onEdit={onEdit} // placeholder for now
                    />
                </li>
            ))}
        </ul>
    )
}

export default PeptideList