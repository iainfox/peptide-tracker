import { Section } from "../../types.ts";
import { ListItem } from "../ListItem/ListItem.tsx";
import "./TimeSection.css"

type Props = {
    section: Section;
    selectedItemId: number | null;
    onSelectItem: (id: number) => void;
    checkedItems: Set<number>;
    setCheckedItems: React.Dispatch<
        React.SetStateAction<Set<number>>
    >;
};

export function TimeSection({
    section,
    selectedItemId,
    onSelectItem,
    checkedItems,
    setCheckedItems,
}: Props) {
    return (
        <ul className="list-data">
            <h3 className="list-title">{section.time}</h3>

            {section.items.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    isSelected={selectedItemId === item.id}
                    isChecked={checkedItems.has(item.id)}
                    onSelect={() => onSelectItem(item.id)}
                    onToggle={() =>
                        setCheckedItems((prev) => {
                            const next = new Set(prev);
                            next.has(item.id) ? next.delete(item.id) : next.add(item.id);
                            return next;
                        })
                    }
                />
            ))}
        </ul>
    );
}