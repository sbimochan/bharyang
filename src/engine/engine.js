export function getHypotenuse(perpendicular, base) {
  const hypotenuse = Math.sqrt(perpendicular ** 2 + base ** 2);
  return parseFloat(hypotenuse.toFixed(2));
}

export function radianToDegree(radian) {
  return radian * (180 / Math.PI);
}

export function degreeToRadian(deg) {
  return (deg * Math.PI) / 180;
}

export function getAngle(base, hypotenuse) {
  const radian = Math.acos(base / hypotenuse);
  return radianToDegree(radian);
}

export function getBase(perpendicular, angle) {
  const radian = degreeToRadian(angle);
  const base = perpendicular / Math.tan(radian);
  return parseFloat(base.toFixed(2));
}
