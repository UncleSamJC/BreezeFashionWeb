import { colors, typography } from '../../lib/designTokens';

function Mission() {
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div
            className="p-10 rounded-2xl"
            style={{ backgroundColor: colors.background.isabelline }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.primary,
                lineHeight: typography.lineHeight.tight,
              }}
            >
              Our Mission
            </h2>

            <p
              className="text-base md:text-lg"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.secondary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              To deliver exceptional apparel manufacturing services that empower our clients to achieve
              their brand goals with confidence. We are committed to excellence, integrity,
              and building lasting partnerships based on trust and quality results.
            </p>
          </div>

          {/* Values */}
          <div
            className="p-10 rounded-2xl"
            style={{ backgroundColor: colors.background.whiteChocolate }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.primary,
                lineHeight: typography.lineHeight.tight,
              }}
            >
              Our Values
            </h2>

            <ul className="space-y-3">
              {['Quality', 'Excellence', 'Client Focus', 'Innovation', 'Reliability'].map((value, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-base md:text-lg"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                  />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
