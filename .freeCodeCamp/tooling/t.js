import { getState } from './env.js';

export async function t(key, args = {}, forceLangToUse) {
  const { locale: loc } = await getState();
  // Get key from ./locales/{locale}/comments.json
  // Read file and parse JSON
  const locale = forceLangToUse ?? loc;
  const comments = import(
    `.freeCodeCamp/tooling/locales/${locale}/comments.json`,
    {
      assert: { type: 'json' }
    }
  );

  // Get value from JSON
  const value = comments[key];
  // Replace placeholders in value with args
  const result =
    Object.values(args)?.length > 0
      ? value.replace(/\{\{(\w+)\}\}/g, (_, m) => args[m])
      : value;
  // Return value
  return result;
}
