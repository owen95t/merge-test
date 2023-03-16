/**
 * This function will merge two already sorted arrays into one single sorted array
 * The merging method utilized is the merge sort method
 * @param arr1 {number[]}
 * @param arr2 {number[]}
 */
export const merge = (arr1: number[], arr2: number[]): number[] => {
    const result: number[] = [];
    const a1Length: number = arr1.length;
    const a2Length: number = arr2.length;
    let i: number = 0, j: number = 0;
    while (i < a1Length && j < a2Length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i += 1;
        } else {
            result.push(arr2[j]);
            j += 1;
        }
    }

    while (i < a1Length) {
        result.push(arr1[i]);
        i += 1;
    }

    while (j < a2Length) {
        result.push(arr2[j]);
        j += 1;
    }

    return result;
};
