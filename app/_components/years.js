const years = new Date().getFullYear() - 2021;
export const yearWord =
  ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][
    years - 1
  ] ?? years;
