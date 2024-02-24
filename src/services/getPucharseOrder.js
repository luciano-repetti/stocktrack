import { pucharseOrder } from "@/data/pucharseOrder"

export const getPucharseOrder = () => {
    const total = calculateTotal(pucharseOrder.items);

    return { ...pucharseOrder, total };
};

export const calculateTotal = (items = []) => {
    return items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
