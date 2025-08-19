// Tipe dan implementasi untuk Google Tag Manager (GTM) data layer.

export type DataLayer = Array<object>;

export const dataLayer: DataLayer = [];

declare global {
  interface Window {
    dataLayer: DataLayer;
  }
}

export interface GTMPageMetadata {
  storyID?: string;
  pubDate?: string;
  storyType?: string;
  parentTopic?: string;
  childTopic?: string;
  relatedFaculty?: string;
  relatedTopics?: string;
  authors?: string;
  programAcronym?: string;
  relatedIndustry?: string;
  relatedGeo?: string;
}
