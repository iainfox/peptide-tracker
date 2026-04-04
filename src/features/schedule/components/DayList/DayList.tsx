import { Section } from "../../types.ts";
import { TimeSection } from "../TimeSection/TimeSection.tsx";
import "./DayList.css"

type Props = {
    sections: Section[];
    selectedItemId: number | null;
    onSelectItem: (id: number) => void;
    checkedItems: Set<number>;
    setCheckedItems: React.Dispatch<
        React.SetStateAction<Set<number>>
    >;
};

export function DayList({
    sections,
    selectedItemId,
    onSelectItem,
    checkedItems,
    setCheckedItems,
}: Props) {
    return (
        <div className={"peptides"}>
            {(() => {
                const now = new Date();
                const monthLong = now.toLocaleString('default', { month: 'long' });
                const monthNum = String(now.getMonth() + 1).padStart(2, '0');
                const dayNum = String(now.getDate()).padStart(2, '0');
                return (
                    <h2 className="list-title">
                        {`${monthLong}, ${monthNum}/${dayNum}`}
                    </h2>
                );
            })()}

            <ul className="day-group">
                {sections.map((section) => (
                    <li>
                        <TimeSection
                            key={section.time}
                            section={section}
                            selectedItemId={selectedItemId}
                            onSelectItem={onSelectItem}
                            checkedItems={checkedItems}
                            setCheckedItems={setCheckedItems}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}