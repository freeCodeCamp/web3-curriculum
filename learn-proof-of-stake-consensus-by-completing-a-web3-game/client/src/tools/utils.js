/**
 * Takes an array, and randomly scrambles the order of its elements.
 * @param {Object[]} options - An array of objects with the following properties.
 * @returns {Object[]} - The scrambled array
 */
export function scramble(options) {
  const shuffled = options?.sort(() => Math.random() - 0.5) ?? [];
  return shuffled;
}
