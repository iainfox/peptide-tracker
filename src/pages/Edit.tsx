import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PeptideList from "../features/peptide-list/components/PeptideList/PeptideList";
import { Item } from "../features/schedule/types";

function Edit() {
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

    function showAddForm() {
        console.log("Shows the empty add form.")
    }

    function handleEdit() {
        console.log("This will open the add form with the details currently specified for that peptide filled in then replace it when the user submits it.");
    }

    return <div className="page">
        <PeptideList
            peptides={peptides}
            onAdd={showAddForm}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
        <Navbar />
    </div>;
}

export default Edit;