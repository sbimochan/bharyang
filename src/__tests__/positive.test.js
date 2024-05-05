import {
  getHypotenuse,
  radianToDegree,
  degreeToRadian,
  getAngle,
  getBase,
} from '../engine/engine';

describe('getHypotenuse', () => {
  test('calculates hypotenuse correctly', () => {
    expect(getHypotenuse(3, 4)).toBe(5);
  });
});

describe('radianToDegree', () => {
  test('converts radian to degree correctly', () => {
    expect(radianToDegree(Math.PI)).toBe(180);
  });
});

describe('degreeToRadian', () => {
  test('converts degree to radian correctly', () => {
    expect(degreeToRadian(180)).toBe(Math.PI);
  });
});

describe('getAngle', () => {
  test('calculates angle correctly', () => {
    expect(getAngle(3, 5)).toBe(53.13010235415599);
  });
});

describe('getBase', () => {
  test('calculates base correctly', () => {
    expect(getBase(3, 30)).toBeCloseTo(5.196152422706632);
  });
});
