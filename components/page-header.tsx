export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
}
