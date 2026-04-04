import { Item } from "../../types.ts";

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
            className={
                [
                    isSelected ? "list-item--selected" : "",
                    isChecked ? "list-item--checked" : "",
                    "list-item"
                ].filter(Boolean).join(" ")
            }
        >
            {item.name}

            <input
                type="checkbox"
                checked={isChecked}
                onChange={onToggle}
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}