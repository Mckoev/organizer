import { INews } from 'types/interfaices';

export function getSize(index: number, items: INews[]): number {
    let count = 140;
    if (items[index].title) {
        if (items[index].title.length > 53) {
            count = count + items[index].title.length - 50;
        }
    }
    if (!items[index].description) {
        return count;
    }
    if (items[index].description.length < 100) {
        count += items[index].description.length * 0.18;
    }
    if (items[index].description.length > 200) {
        count -= items[index].description.length * 0.15;
    }
    if (items[index].description.length > 350) {
        count -= items[index].description.length * 0.15;
    }
    return count + items[index].description.length * 0.35;
}
