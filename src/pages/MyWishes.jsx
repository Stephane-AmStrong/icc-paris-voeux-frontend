import { Link, useParams } from "react-router-dom";
import { useGetWishesQuery } from "../features/wishes/wishesApiSlice";

export default function MyWishes() {
  const { id } = useParams();

  const { wish } = useGetWishesQuery("wishesList", {
    selectFromResult: ({ data }) => ({ wish: data?.entities[id] }),
  });

  const baseUrl = window.location.origin;
  const pageToPrint = `${baseUrl}/print/${id}`;

  const encodedPageToPrint = encodeURIComponent(pageToPrint);

  console.log(
    `pageToPrint: ${pageToPrint} encodedPageToPrint: ${encodedPageToPrint}`
  );

  return (
    <main>
      <header className="site-header">
        <div className="section-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h1 className="text-white">Vos voeux ont été enregisté</h1>
            </div>
          </div>
        </div>
      </header>

      <section
        className="job-section job-featured-section section-padding"
        id="job-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 text-center mx-auto mb-4">
              {/* <a
                className="nav-link custom-btn btn"
                href={`${process.env.REACT_APP_BASE_URL}/pdf/print?page=${encodedPageToPrint}`}
                target="_blank"
                rel="noreferrer"
              >
                Télécharger mes voeux sous format PDF
              </a> */}
              <Link
                className="nav-link custom-btn btn"
                to={`/print/${id}`}
                // target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger mes voeux sous format PDF
              </Link>
            </div>

            <div className="col-lg-12 col-12">
              {wish?.spiritually && (
                <div className="job-thumb d-flex">
                  <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div className="mb-3">
                      <div className="d-flex flex-wrap align-items-center">
                        <p className="job-location mb-0">
                          <i className="custom-icon bi-person me-1 p-2 lead"></i>
                          <strong>{wish.spiritually}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {wish?.familiallyRelationally && (
                <div className="job-thumb d-flex">
                  <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div className="mb-3">
                      <div className="d-flex flex-wrap align-items-center">
                        <p className="job-location mb-0">
                          <i className="custom-icon bi-people me-1 p-2 lead"></i>
                          <strong>{wish.familiallyRelationally}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {wish?.financiallyMaterially && (
                <div className="job-thumb d-flex">
                  <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div className="mb-3">
                      <div className="d-flex flex-wrap align-items-center">
                        <p className="job-location mb-0">
                          <i className="custom-icon bi-cash me-1 p-2 lead"></i>
                          <strong>{wish.financiallyMaterially}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {wish?.professionallyAcademically && (
                <div className="job-thumb d-flex">
                  <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div className="mb-3">
                      <div className="d-flex flex-wrap align-items-center">
                        <p className="job-location mb-0">
                          <i className="custom-icon bi-briefcase me-1 p-2 lead"></i>
                          <strong>{wish.professionallyAcademically}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {wish?.other && (
                <div className="job-thumb d-flex">
                  <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div className="mb-3">
                      <div className="d-flex flex-wrap align-items-center">
                        <p className="job-location mb-0">
                          <i className="custom-icon bi-puzzle me-1 p-2 lead"></i>
                          <strong>{wish.other}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
