import {INews} from 'types/interfaices';

export function getSize(index: number, items: INews[]): number {
    const availableScreenWidth = window.screen.availWidth
    let count = 140;
    if (availableScreenWidth < 480) {
        count += 100
    }

        console.log(items[index].description)

    if (items[index].title) {
        if (items[index].title.length > 53) {
            count = count + items[index].title.length - 50;
        }
    }
    if (!items[index].description) {
        if (availableScreenWidth < 480) {
            count -= 80
        }
        return count;
    }
    if (items[index].description.length < 100) {

        if (availableScreenWidth < 480) {
            count += items[index].description.length * 0.6;
        }
        count += items[index].description.length * 0.18;
    }
    if (items[index].description.length > 200) {
        if (availableScreenWidth < 480) {
            count += items[index].description.length * 0.6;
        }
        count -= items[index].description.length * 0.15;
    }
    if (items[index].description.length > 350) {
        if (availableScreenWidth < 480) {
            count += items[index].description.length * 0.6;
        }
        count -= items[index].description.length * 0.15;
    }
    return count + items[index].description.length * 0.35;
}
