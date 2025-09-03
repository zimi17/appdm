"use client";

import { AlertAndBanner } from "./components/alert-and-banner";
import { SanitySiteSettings } from "@/lib/sanity-queries";

interface SiteHeaderAlertProps {
  siteSettings: SanitySiteSettings | null;
  className?: string;
}

export function SiteHeaderAlert({ siteSettings, className }: SiteHeaderAlertProps) {
  const globalAlert = siteSettings?.globalAlert;

  if (!globalAlert?.isEnabled) {
    return null;
  }

  return (
    <AlertAndBanner
      type="info"
      title={globalAlert.title}
      message={globalAlert.description || ""}
      linkText={globalAlert.linkText}
      linkHref={globalAlert.linkHref}
      dismissible={true}
      className={className}
    />
  );
}
