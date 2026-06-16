export const validateInput = (input: string): boolean => {
  return URL.canParse(input) && input.length <= 500;
};
