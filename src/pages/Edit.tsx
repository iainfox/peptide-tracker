import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PeptideList from "../features/peptide-list/components/PeptideList/PeptideList";
import { Item } from "../features/schedule/types";
import AddForm from "../features/add-form/components/AddForm/AddForm";

function Edit() {
    const [isVisible, setIsVisible] = useState(false);
    const [peptides, setPeptides] = useState<Item[]>([
        {
            id: 1,
            name: "Johnny"
        },
        {
            id: 2,
            name: "Timmy"
        }
    ]);

    function handleDelete(id: number) {
        setPeptides((prev) => prev.filter((p) => p.id !== id));
    }

    function handleEdit() {
        console.log("This will open the add form with the details currently specified for that peptide filled in then replace it when the user submits it.");
    }

    return <div className="page">
        <PeptideList
            peptides={peptides}
            showAddForm={setIsVisible}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
        <Navbar />
        <AddForm 
            isVisible={isVisible}
            hideAddForm={setIsVisible}
        />
    </div>;
}

export default Edit;