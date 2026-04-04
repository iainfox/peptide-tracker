import { Item } from "../../types.ts";

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
            <label htmlFor={String(id)}>{item.name}</label>

            <input
                type="checkbox"
                checked={isChecked}
                onChange={onToggle}
                onClick={(e) => e.stopPropagation()}
                id={String(id)}
            />
        </div>
    );
}