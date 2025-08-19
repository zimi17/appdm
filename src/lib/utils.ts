import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce<Fn extends Function>(fn: Fn, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: Array<unknown>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  } as unknown as Fn;
}

const DOC_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
];

/**
 * A link is a document if its pathname ends with a document extension.
 */
export function isDocumentLink(link: string): boolean {
  if (!link) return false;

  let pathname: string;

  try {
    const url = new URL(link);
    pathname = url.pathname;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    pathname = link;
  }

  return DOC_EXTENSIONS.some((extension) => pathname.endsWith(extension));
}

/**
 * A link is external if host does not contain hbs.edu.
 */
export function isExternalLink(href: string): boolean {
  if (!href) {
    return false;
  }

  try {
    const url = new URL(href);
    return !url.host.endsWith("hbs.edu");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}

export function filterUndefined<T>(
  value: T | undefined | null | false | "",
): value is T {
  return Boolean(value);
}

interface StyleTransitionDelayArgs {
  index: number;
  isVisible?: boolean;
  delay?: number;
}

export function styleTransitionDelay({
  index,
  isVisible,
  delay = 0.03,
}: StyleTransitionDelayArgs) {
  return {
    transitionDelay: `${index * delay}s`,
    transform: isVisible ? "translateY(0)" : "translateY(100%)",
  };
}
