import { merge } from "../merge";
import { describe } from "node:test";

/**
 * This will test the merge function
 */
describe('Testing merge function', () => {
    test('Two sorted arrays of the same length', () => {
        const a1: number[] = [1, 3, 5, 9];
        const a2: number[] = [2, 4, 6, 8];
        expect(merge(a1, a2)).toStrictEqual([...a1, ...a2].sort());
    });

    test('Two sorted arrays of different lengths', () => {
        const a1: number[] = [1, 3, 5, 8, 9];
        const a2: number[] = [2, 4, 6];
        expect(merge(a1, a2)).toStrictEqual([...a1, ...a2].sort());
    });

    test('One sorted array with one empty array', () => {
        const a1: number[] = [1, 3, 5, 8, 9];
        const a2: number[] = [];
        expect(merge(a1, a2)).toStrictEqual([...a1, ...a2].sort());
    });

    test('One array with a length of one and one empty array', () => {
        const a1: number[] = [1]
        const a2: number[] = []
        expect(merge(a1, a2)).toStrictEqual([...a1, ...a2]);
    });

    test('Two empty arrays', () => {
        expect(merge([], [])).toStrictEqual([]);
    });

});
