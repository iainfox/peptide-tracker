import "./PeptideItem.css"
import { Item } from "../../types";

type Props = {
    peptide: Item;
    onEdit: () => void;
    onDelete: () => void;
};

function PeptideItem({
    peptide,
    onEdit,
    onDelete
}: Props) {
    return (
        <div
            className="peptide-list-item"
        >
            <span className="label">{peptide.name}</span>

            <div className="button-group">
                <button aria-label="Edit Peptide" className="icon-button" onClick={onEdit}>
                    <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><g></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="m104.175 90.97-4.252 38.384 38.383-4.252L247.923 15.427V2.497L226.78-18.646h-12.93zm98.164-96.96 31.671 31.67" transform="translate(-77.923 40.646)"></path></g></svg>
                </button>

                <button aria-label="Delete Peptide" className="icon-button" onClick={onDelete}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
            </div>
        </div>
    )
}

export default PeptideItem