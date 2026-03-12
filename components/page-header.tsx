export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-semibold tracking-tight text-navy">{title}</h1>
      <p className="mt-1 text-slate">{subtitle}</p>
    </div>
  );
}
