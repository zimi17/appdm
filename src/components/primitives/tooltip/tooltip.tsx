import "./tooltip.scss";

import { ReactNode } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as Popover from "@radix-ui/react-popover";
import { Icon } from "../components/icons/icon";

export interface TooltipProps {
  /** Tooltip text */
  text: ReactNode;
  title?: string;
  children?: ReactNode;
}

/**
 * A simple tooltip component for exposing more information inline. Hoverable on desktop and clickable on mobile.
 */
export function Tooltip({ text, title, children }: TooltipProps) {
  return (
    <div className="hbs-tooltip">
      <div className="hbs-tooltip--hover">
        {/* Hoverable on desktop (sighted users only) */}
        <HoverCard.Root>
          <HoverCard.Trigger className="hbs-tooltip__trigger-wrapper">
            <>
              <div className="hbs-tooltip-highlight">{children}</div>

              <button
                className="hbs-tooltip__trigger"
                aria-describedby={text
                  ?.toString()
                  .toLowerCase()
                  .replaceAll(" ", "_")}
              >
                <span className="hbs-global-visually-hidden">
                  More Info tooltip
                </span>
                <Icon
                  name="questionMark"
                  className="hbs-tooltip__trigger-icon"
                />
              </button>
            </>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              className="hbs-tooltip__content"
              side="top"
              sideOffset={5}
            >
              <div id={text?.toString().toLowerCase().replaceAll(" ", "_")}>
                {title && <h5 className="hbs-tooltip__title">{title}</h5>}
                <p>{text}</p>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>

      {/* Clickable for mobile */}
      <div className="hbs-tooltip--popover">
        <Popover.Root>
          <Popover.Trigger className="hbs-tooltip__trigger-wrapper">
            <>
              <div className="hbs-tooltip-highlight">{children}</div>
              <div className="hbs-tooltip__trigger">
                <span className="hbs-global-visually-hidden">{text}</span>
                <Icon
                  name="questionMark"
                  className="hbs-tooltip__trigger-icon"
                />
              </div>
            </>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="hbs-tooltip__content"
              side="top"
              sideOffset={5}
            >
              <Popover.Close className="hbs-tooltip__close">
                <Icon name="close" className="hbs-tooltip__close-icon" />
                <span className="hbs-global-visually-hidden">Close</span>
              </Popover.Close>
              <div>
                {title && <h5 className="hbs-tooltip__title">{title}</h5>}
                <p>{text}</p>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}
