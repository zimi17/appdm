import "./statistic.scss";

import { ReactNode } from "react";
import { EditAttributes } from "../types/types";

export interface StatisticProps {
  description?: ReactNode;
  figure?: ReactNode;
  unit?: string;
  prefixedUnit?: string;

  editAttributes?: {
    value?: EditAttributes;
    description?: EditAttributes;
  };
}

export function Statistic({
  figure,
  unit,
  description,
  prefixedUnit,
  editAttributes,
}: StatisticProps) {
  if (!figure) return null;

  return (
    <div className="hbs-statistic">
      <span {...editAttributes?.value} className="hbs-statistic__figure">
        {prefixedUnit && (
          <sup className="hbs-statistic__unit hbs-statistic__unit--prefix">
            {prefixedUnit}
          </sup>
        )}
        {figure.toLocaleString()}
        {unit && <sup className="hbs-statistic__unit">{unit}</sup>}
      </span>

      {description && (
        <div
          {...editAttributes?.description}
          className="hbs-statistic__caption"
        >
          <span className="hbs-statistic__caption-text">{description}</span>
        </div>
      )}
    </div>
  );
}
