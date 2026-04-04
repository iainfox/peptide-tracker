import { Item } from "../../types.ts";
import "./ListItem.css"

type Props = {
    item: Item;
    id: number;
    isSelected: boolean;
    isChecked: boolean;
    onSelect: () => void;
    onToggle: () => void;
};

export function ListItem({
    item,
    id,
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
            <label htmlFor={String(id)}>{item.name}</label>

            <input
                type="checkbox"
                checked={isChecked}
                onChange={onToggle}
                onClick={(e) => e.stopPropagation()}
                id={String(id)}
            />
        </li>
    );
}