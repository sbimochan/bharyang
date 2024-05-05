import {
  getHypotenuse,
  radianToDegree,
  degreeToRadian,
  getAngle,
  getBase,
} from '../engine/engine';

describe('getHypotenuse', () => {
  test('returns NaN if any parameter is not a number', () => {
    expect(getHypotenuse('a', 4)).toBe(NaN);
  });
});

describe('radianToDegree', () => {
  test('returns NaN if input is not a number', () => {
    expect(radianToDegree('abc')).toBe(NaN);
  });
});

describe('degreeToRadian', () => {
  test('returns NaN if input is not a number', () => {
    expect(degreeToRadian('abc')).toBe(NaN);
  });
});

describe('getAngle', () => {
  test('returns NaN if any parameter is not a number', () => {
    expect(getAngle('a', 5)).toBe(NaN);
  });
});

describe('getBase', () => {
  test('returns NaN if any parameter is not a number', () => {
    expect(getBase('a', 30)).toBe(NaN);
  });
});
