import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { DayList } from "../features/schedule/components/DayList/DayList";
import "./Home.css"

function Home() {
    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    const data = [
        {
            time: "9:00 AM",
            items: [
                { id: 1, name: "Task A" },
                { id: 2, name: "Task B" },
            ],
        },
        {
            time: "10:00 AM",
            items: [
                { id: 3, name: "Task A" },
            ],
        },
    ];

    return <div className="page">
        <DayList
            sections={data}
            selectedItemId={selectedItemId}
            onSelectItem={setSelectedItemId}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
        />
        <Navbar />
    </div>;
}

export default Home;