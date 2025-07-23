/**
 * Add or remove an ID from the nav stack
 *
 * If removing, remove all ids (e.g. nested nav items) after the given id.
 *
 * Passing `true` for the `force` param will always remove an id if present.
 */
export function toggleNavStack(
  id: string,
  level: number,
  stack: Array<string>,
  force?: boolean,
) {
  const isPresent = stack[level] === id;

  if (!isPresent && force !== false) {
    return [...stack.slice(0, level), id];
  } else if (isPresent && force !== true) {
    return stack.slice(0, level);
  }

  // noop
  return stack;
}