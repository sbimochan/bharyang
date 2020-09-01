export function getPerpendicular(base, hypotenuse){
  const perpendicular = Math.sqrt(hypotenuse^2 - base^2)
  return perpendicular;
}

export function getBase(perpendicular, hypotenuse) {
	const base = Math.sqrt(hypotenuse ^ 2 - perpendicular^ 2);
	return base;
}

export function getHypotenuse(perpendicular, base) {
	const hypotenuse = Math.sqrt(perpendicular ^ 2 + base^ 2);
	return hypotenuse;
}