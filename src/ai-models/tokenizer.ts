export function tokenize(text: string): string[] {
  return text
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
    .toLowerCase()
    .split(/[^a-z]+/)                    // Split on non-letters
    .filter(Boolean);
}


export function buildVocab(data: { apiName: string }[]): string[] {
  const vocabSet = new Set<string>();
  data.forEach(({ apiName }) => {
    tokenize(apiName).forEach(word => {vocabSet.add(word)});
  });
  return Array.from(vocabSet);
}
