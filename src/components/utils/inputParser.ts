const calculateSimilarity = (str1: string, str2: string): number => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1 === str2) return 1;
  if (str1.includes(str2) || str2.includes(str1)) return 0.8;

  const set1 = new Set(str1.split(''));
  const set2 = new Set(str2.split(''));
  const intersection = new Set([...set1].filter(char => set2.has(char)));

  return intersection.size / Math.max(set1.size, set2.size);
};