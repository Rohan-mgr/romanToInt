function romanToInt(roman) {
  const hashMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  const romanStrings = roman.split("");
  let sum = 0;

  for (let i = 0; i < romanStrings.length; i++) {
    if (hashMap.get(romanStrings[i]) < hashMap.get(romanStrings[i + 1])) {
      sum += hashMap.get(romanStrings[i + 1]) - hashMap.get(romanStrings[i]);
      i++;
    } else {
      sum += hashMap.get(romanStrings[i]);
    }
  }
  return sum;
}

module.exports = romanToInt;
