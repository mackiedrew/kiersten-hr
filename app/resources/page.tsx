import type { Metadata } from "next";
import { getAllResources } from "../../lib/resources";

export const metadata: Metadata = {
  title: "Resources | Fractional HR Support",
  description:
    "Downloadable HR templates, guides, and checklists from Fractional HR Support.",
};

export default function ResourcesPage() {
  const resources = getAllResources();

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            HR <span className="highlight">Resources</span>
          </h1>
          <p>
            Free templates, guides, and checklists to help you manage your
            people practices.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="resource-list">
            {resources.length === 0 ? (
              <p
                style={{ textAlign: "center", color: "#888", padding: "40px 0" }}
              >
                Resources coming soon — check back shortly!
              </p>
            ) : (
              resources.map((resource) => (
                <div key={resource.id} className="resource-item">
                  <div className="resource-info">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                  </div>
                  <a
                    href={`/kiersten-hr/resources-files/${resource.stored_as}`}
                    className="btn btn-navy"
                    download
                  >
                    Download
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
