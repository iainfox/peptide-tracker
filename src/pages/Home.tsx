import { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { DayList } from "../features/schedule/components/DayList";
import "./Home.css"

const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

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
            { id: 3, name: "Task C" },
        ],
    },
];

function Home() {
    return <div>
        <h1>Home Page</h1>
        <DayList
            sections={data}
            selectedItemId={null}
            onSelectItem={() => {}}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
        />
        <Navbar />
    </div>;
}

export default Home;