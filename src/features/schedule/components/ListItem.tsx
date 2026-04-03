import { Item } from "../types.ts";

type Props = {
    item: Item;
    isSelected: boolean;
    isChecked: boolean;
    onSelect: () => void;
    onToggle: () => void;
};

export function ListItem({
    item,
    isSelected,
    isChecked,
    onSelect,
    onToggle,
}: Props) {
    return (
        <div
            onClick={onSelect}
            style={{
                border: isSelected ? "2px solid blue" : "1px solid gray",
                backgroundColor: isChecked ? "#ddd" : "#fff",
                padding: "8px",
                marginBottom: "4px",
                cursor: "pointer",
            }}
        >
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onToggle}
                onClick={(e) => e.stopPropagation()}
            />

            {item.name}
        </div>
    );
}