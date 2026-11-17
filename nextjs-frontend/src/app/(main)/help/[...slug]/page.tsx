import Link from 'next/link';

export default async function HelpBreadcrumbPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug = [] } = await params;

  return (
    <div className="page-shell">
      <div className="card">
        <p className="eyebrow">Help</p>
        <h1>Help Breadcrumb</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/help">Help</Link>
          {slug.map((segment, index) => (
            <span key={`${segment}-${index}`}>
              <span>/</span>
              <span>{segment}</span>
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
