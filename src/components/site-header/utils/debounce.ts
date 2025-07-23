// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce<Fn extends Function>(fn: Fn, ms = 300) {
    let timeoutId: ReturnType<typeof setTimeout>;
  
    return function (this: unknown, ...args: Array<unknown>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    } as unknown as Fn;
  }
  