export default async function ArchivePage({ params }: { params: Promise<{ year?: string[] }> }) {
  const { year = [] } = await params;

  return (
    <div className="page-shell">
      <div className="card">
        <p className="eyebrow">Archive</p>
        <h1>Year archive</h1>
        <p>{year.length ? `Viewing archive for ${year.join('/')}` : 'Viewing all archives'}</p>
      </div>
    </div>
  );
}
