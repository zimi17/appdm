import "./arrow-button.scss";

import { ButtonHTMLAttributes } from "react";
import cn from "clsx";
import { Icon } from "design-system/components/icons/icon";

export interface ArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "prev" | "next";
}

export function ArrowButton({ variant, ...props }: ArrowButtonProps) {
  const text = variant === "prev" ? "Previous" : "Next";
  return (
    <button
      type="button"
      title={text}
      {...props}
      className={cn(`hbs-arrow-button--${variant}`, props.className)}
    >
      <span className="hbs-global-visually-hidden">{text}</span>
      <Icon name="arrow" />
    </button>
  );
}
