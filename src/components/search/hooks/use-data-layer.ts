// Hook ini adalah placeholder untuk 'useDataLayer' yang hilang.
// Implementasi ini menyediakan fungsi 'pushDataLayer' palsu yang hanya
// mencatat event ke konsol untuk tujuan debugging.

export interface DataLayerEvent {
  event: string;
  event_data: Record<string, any>;
}

export function useDataLayer() {
  const pushDataLayer = (event: DataLayerEvent) => {
    console.log("DataLayer Event Pushed:", event);
    // Di aplikasi nyata, ini akan berinteraksi dengan Google Tag Manager atau sistem analitik lainnya.
    // window.dataLayer?.push(event);
  };

  return { pushDataLayer };
}
