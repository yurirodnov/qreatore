// src/lib/validateData.ts

export type ValidationResult =
  | { validation: true }
  | { validation: false; reason: "invalid_url" }
  | { validation: false; reason: "too_long" }
  | { validation: false; reason: "wrong_protocol" };

export const validateInput = (input: string): ValidationResult => {
  if (input.length > 500) {
    return { validation: false, reason: "too_long" };
  }

  if (!URL.canParse(input)) {
    return { validation: false, reason: "invalid_url" };
  }

  const url = URL.parse(input);
  if (url?.protocol !== "http:" && url?.protocol !== "https:") {
    return { validation: false, reason: "wrong_protocol" };
  }

  return { validation: true };
};
