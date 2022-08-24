export function getSize(index, items) {
    let count = 110
    if (items[index].title) {
        if (items[index].title.length > 53) {
            count = count + items[index].title.length - 50
        }
    }
    if (!items[index].description) {
        return count
    }
    if (items[index].description.length < 100) {
        count = count + items[index].description.length * 0.03
    }
    if (items[index].description.length > 200) {
        count = count - items[index].description.length * 0.03
    }
    if (items[index].description.length > 350) {
        count = count - items[index].description.length * 0.1
    }
    return count + items[index].description.length * 0.35
}