import { Item } from "../../types.ts";
import "./ListItem.css"

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
        <li
            onClick={onSelect}
            className={
                [
                    isSelected ? "selected" : "",
                    isChecked ? "checked" : "",
                    "list-item"
                ].filter(Boolean).join(" ")
            }
        >
            <span className="label">{item.name}</span>

            <input
                type="checkbox"
                checked={isChecked}
                onChange={onToggle}
                onClick={(e) => e.stopPropagation()}
            />
        </li>
    );
}