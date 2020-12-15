interface Item {
    id: string;
}

export const fintItemIndexById = <T extends Item>(items: T[], id: string ) => {
    return items.findIndex((item:T) => item.id === id);
}