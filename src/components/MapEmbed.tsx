/**
 * Interactive map placeholder. Swap the `src` for a real Google Maps embed
 * URL (Google Maps → Share → Embed a map) when the office address is final.
 */
export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <iframe
        title="Anchor Digital Solutions location map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=36.78%2C-1.32%2C36.88%2C-1.24&layer=mapnik"
        loading="lazy"
        className="h-48 w-full border-0"
      />
    </div>
  );
}
