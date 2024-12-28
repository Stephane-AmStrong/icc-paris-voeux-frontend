import WishesForm from "../features/wishes/WishesForm";

export default function Home() {
  return (
    <main>
      <section className="hero-section d-flex justify-content-center align-items-center">
        <div className="section-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <div className="hero-section-text mt-5">
                <h6 className="text-white">
                  Que voudrais-tu voir le Seigneur accomplir dans ta vie ?
                </h6>
                <h1 className="hero-title text-white mt-4 mb-4">
                  Mes Vœux 2025
                </h1>
                <a
                  href="#categories-section"
                  className="custom-btn custom-border-btn btn"
                >
                  Formuler mes vœux
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="categories-section section-padding"
        id="categories-section"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-12">
              <WishesForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
