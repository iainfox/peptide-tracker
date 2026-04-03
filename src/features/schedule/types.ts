export type Item = {
    id: number;
    name: string;
};

export type Section = {
    time: string;
    items: Item[];
};