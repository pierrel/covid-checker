export async function asyncFilter<T>(arr: Array<T>, predicate: (a:T)=>Promise<boolean>): Promise<Array<T>> {
    return Promise.all(arr.map(el => {
        return predicate(el);
    })).then((results) => {
        return arr.filter((_, index) => results[index]);
    });
}