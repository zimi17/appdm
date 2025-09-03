import { PageManager } from '@/components/admin/page-manager';
import { PageHead } from '@/components/primitives/page-head/page-head';

export default function AdminPage() {
  return (
    <>
      <PageHead
        title="Admin Dashboard - STIE Dwimulya"
        description="Manage website content and pages"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8">
          <PageManager />
        </div>
      </div>
    </>
  );
}
