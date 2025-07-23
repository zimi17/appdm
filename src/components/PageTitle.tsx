import React from 'react';
import { usePageProps } from '../context/PagePropsContext';

export function PageTitle() {
  // Panggil hook untuk mendapatkan data dari konteks
  const { entry, request } = usePageProps();

  // Ambil judul dari entry, dengan fallback
  const title = entry?.fields?.title || 'Halaman Tanpa Judul';

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ddd', margin: '20px 0' }}>
      <h1>{title}</h1>
      <p>
        <small>Ini adalah judul halaman yang diambil dari PagePropsContext.</small>
        <br />
        <small>Path saat ini: <code>{request.path}</code></small>
      </p>
    </div>
  );
}
