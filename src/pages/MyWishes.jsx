import { useParams } from "react-router-dom";
import { useGetWishesQuery } from "../features/wishes/wishesApiSlice";

export default function MyWishes() {
  const { id } = useParams();

  const { wish } = useGetWishesQuery("wishesList", {
    selectFromResult: ({ data }) => ({ wish: data?.entities[id] }),
  });

  console.log(JSON.stringify(wish));

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
      <section className="job-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            {wish?.spiritually && (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="job-thumb job-thumb-box">
                  <div className="job-body">
                    <h6>{wish.spiritually}</h6>
                  </div>
                </div>
              </div>
            )}

            {wish?.familiallyRelationally && (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="job-thumb job-thumb-box">
                  <div className="job-body">
                    <h6>{wish.familiallyRelationally}</h6>
                  </div>
                </div>
              </div>
            )}

            {wish?.financiallyMaterially && (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="job-thumb job-thumb-box">
                  <div className="job-body">
                    <h6>{wish.financiallyMaterially}</h6>
                  </div>
                </div>
              </div>
            )}

            {wish?.professionallyAcademically && (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="job-thumb job-thumb-box">
                  <div className="job-body">
                    <h6>{wish.professionallyAcademically}</h6>
                  </div>
                </div>
              </div>
            )}

            {wish?.other && (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="job-thumb job-thumb-box">
                  <div className="job-body">
                    <h6>{wish.other}</h6>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
