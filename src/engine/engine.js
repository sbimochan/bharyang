export function getHypotenuse(perpendicular, base) {
  const hypotenuse = Math.sqrt(perpendicular ** 2 + base ** 2);
  return hypotenuse;
}

export function radianToDegree(radian){
  return radian * (180 / Math.PI);
}

export function getAngle(base, hypotenuse) {
  const radian = Math.acos(base/hypotenuse);
  return radianToDegree(radian)
}