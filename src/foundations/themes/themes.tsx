import { colorSections } from "./colors.constants";

export default function Colors() {
  return (
    <div className="space-y-12">
      {colorSections.map((section) => (
        <section key={section.title}>
          <h2 className="mb-6 text-2xl font-semibold">
            {section.title}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.colors.map((color) => (
              <div
                key={color.name}
                className="overflow-hidden rounded-xl border"
              >
                <div
                  className={`h-24 ${color.className}`}
                />

                <div className="space-y-1 p-4">
                  <p className="font-medium">
                    {color.name}
                  </p>

                  <code className="text-sm text-muted-foreground">
                    {color.className}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}