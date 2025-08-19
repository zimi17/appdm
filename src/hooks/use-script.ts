
import { useEffect } from "react";

interface UseScriptOpts {
  type?: string;
  allowDuplicates?: boolean;
  onload?: () => void;
  dataTarget?: string;
  defer?: boolean;
  dataQpTargetId?: string;
}

export function loadScript(
  src?: string | null | false | undefined,
  opts?: UseScriptOpts,
) {
  if (!src) return;

  const { type, onload, allowDuplicates, dataTarget, defer, dataQpTargetId } =
    opts || {};

  const element = document.querySelector(`script[src='${src}']`);

  if (!element || allowDuplicates) {
    const script = document.createElement("script");

    script.src = src;
    if (type) script.type = type;
    if (onload) script.onload = onload;

    // Data Wrapper Embed
    if (dataTarget) script.dataset.target = dataTarget;

    // Form Assembly Embed
    if (dataQpTargetId) {
      script.setAttribute("data-qp-target-id", dataQpTargetId);
    }

    if (defer) script.defer = defer;

    document.head.appendChild(script);

    return script;
  } else {
    if (onload) onload();
  }
}

export function useScript(
  src: string | null | false | undefined,
  opts?: UseScriptOpts,
) {
  useEffect(() => {
    const script = loadScript(src, opts);
    return () => {
      if (script) script.remove();
    };
  }, [src, opts]);
}
