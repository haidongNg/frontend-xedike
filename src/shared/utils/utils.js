export const calcRate = lenPas => {
  if (typeof lenPas === "undefined") return 0;
  let sum = 0;
  for (const number of lenPas) {
    sum += number;
  }
  return Number((sum / lenPas.length).toFixed(1));
};
