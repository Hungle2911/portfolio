import { Command } from "../commands/commands";

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
 const detectCommand = (input: string, commands: Record<string, Command>): Command | null => {
  const words = input.toLowerCase().trim().split(/\s+/);

  let bestMatch: { command: Command | null; score: number } = {
    command: null,
    score: 0.3 // Minimum similarity threshold
  };

  for (const [_cmdKey, command] of Object.entries(commands)) {
    //Search for exact match
    for (const word of words) {
    if (command.keywords.some(keyword => keyword.toLowerCase() === word)) {
      return command;
    }
  }
  //Search for partial match if the first search failed
    const keywordScores = command.keywords.map(keyword => {
      return words.map(word => calculateSimilarity(keyword, word))
        .reduce((max, score) => Math.max(max, score), 0);
    });
    const bestKeywordScore = Math.max(...keywordScores, 0);

    if (bestKeywordScore > bestMatch.score) {
      bestMatch = {
        command: command,
        score: bestKeywordScore
      };
    }
  }

  return bestMatch.command;
};
export default detectCommand;