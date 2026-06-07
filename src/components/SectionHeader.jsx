export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="heading-lg">{title}</h2>
      {subtitle && <p className="body-copy mt-4">{subtitle}</p>}
    </div>
  );
}
