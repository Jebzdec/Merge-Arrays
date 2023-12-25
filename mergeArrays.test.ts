import { merge } from "./mergeArrays";

describe("merge", () => {
  it("should merge two sorted arrays", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle empty arrays", () => {
    const arr1: number[] = [];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    expect(result).toEqual([2, 4, 6]);
  });

  it("should merge arrays with duplicates", () => {
    const arr1 = [1, 3, 3, 5];
    const arr2 = [2, 4, 4, 6];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 3, 4, 4, 5, 6]);
  });

  it("should handle arrays with one element", () => {
    const arr1 = [1];
    const arr2 = [2];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 2]);
  });

  it("should handle arrays with the same elements", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 1, 2, 2, 3, 3]);
  });
});
