export default async function CatchAllTodoPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  return (
    <div className="page-shell">
      <div className="card">
        <p className="eyebrow">Catch-all route</p>
        <h1>Todo Lookup</h1>
        <p>The slug array is:</p>
        <pre>{JSON.stringify(slug ?? [], null, 2)}</pre>
      </div>
    </div>
  );
}
