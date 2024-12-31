import { useParams } from "react-router-dom";
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
        class="job-section job-featured-section section-padding"
        id="job-section"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12 text-center mx-auto mb-4">
              <a
                class="nav-link custom-btn btn"
                href={`${process.env.BACKEND_BASE_URL}/pdf/print?page=${encodedPageToPrint}`}
                target="_blank"
                rel="noreferrer"
              >
                Télécharger mes voeux sous format PDF
              </a>
            </div>

            <div class="col-lg-12 col-12">
              {wish?.spiritually && (
                <div class="job-thumb d-flex">
                  <div class="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div class="mb-3">
                      <div class="d-flex flex-wrap align-items-center">
                        <p class="job-location mb-0">
                          <i class="custom-icon bi-person me-1 p-2 lead"></i>
                          <strong>{wish.spiritually}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {wish?.familiallyRelationally && (
                <div class="job-thumb d-flex">
                  <div class="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div class="mb-3">
                      <div class="d-flex flex-wrap align-items-center">
                        <p class="job-location mb-0">
                          <i class="custom-icon bi-people me-1 p-2 lead"></i>
                          <strong>{wish.familiallyRelationally}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {wish?.financiallyMaterially && (
                <div class="job-thumb d-flex">
                  <div class="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div class="mb-3">
                      <div class="d-flex flex-wrap align-items-center">
                        <p class="job-location mb-0">
                          <i class="custom-icon bi-cash me-1 p-2 lead"></i>
                          <strong>{wish.financiallyMaterially}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {wish?.professionallyAcademically && (
                <div class="job-thumb d-flex">
                  <div class="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div class="mb-3">
                      <div class="d-flex flex-wrap align-items-center">
                        <p class="job-location mb-0">
                          <i class="custom-icon bi-briefcase me-1 p-2 lead"></i>
                          <strong>{wish.professionallyAcademically}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {wish?.other && (
                <div class="job-thumb d-flex">
                  <div class="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                    <div class="mb-3">
                      <div class="d-flex flex-wrap align-items-center">
                        <p class="job-location mb-0">
                          <i class="custom-icon bi-puzzle me-1 p-2 lead"></i>
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
