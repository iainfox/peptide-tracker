import { Section } from "../../types.ts";
import { TimeSection } from "../TimeSection/TimeSection.tsx";

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
        <div>
            {/* date header later */}

            {sections.map((section) => (
                <TimeSection
                    key={section.time}
                    section={section}
                    selectedItemId={selectedItemId}
                    onSelectItem={onSelectItem}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                />
            ))}
        </div>
    );
}