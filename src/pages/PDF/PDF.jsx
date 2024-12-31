import { useParams } from "react-router-dom";
import "./PDF.css";
import banner from "./icc_wishes_banner.jpg";
import { useGetWishesQuery } from "../../features/wishes/wishesApiSlice";

export default function PDF() {
  const { id } = useParams();

  const baseUrl = window.location.origin;
  console.log(`baseUrl: ${baseUrl}/print-pdf/${id}`);

  const { wish } = useGetWishesQuery("wishesList", {
    selectFromResult: ({ data }) => ({ wish: data?.entities[id] }),
  });

  return (
    <>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>

      <main className="container">
        {wish?.spiritually && (
          <div className="category">
            <h3>Spirituellement</h3>
            <div className="category-border">
              <ul className="product-list">
                <li className="product-item">
                  <h4>{wish.spiritually}</h4>
                </li>
              </ul>
            </div>
          </div>
        )}

        {wish?.familiallyRelationally && (
          <div className="category">
            <h3>Familialement et relationnellement</h3>
            <div className="category-border">
              <ul className="product-list">
                <li className="product-item">
                  <h4>{wish.familiallyRelationally}</h4>
                </li>
              </ul>
            </div>
          </div>
        )}

        {wish?.financiallyMaterially && (
          <div className="category">
            <h3>Financièrement et matériellement</h3>
            <div className="category-border">
              <ul className="product-list">
                <li className="product-item">
                  <h4>{wish.financiallyMaterially}</h4>
                </li>
              </ul>
            </div>
          </div>
        )}

        {wish?.professionallyAcademically && (
          <div className="category">
            <h3>Professionnellement et académiquement</h3>
            <div className="category-border">
              <ul className="product-list">
                <li className="product-item">
                  <h4>{wish.professionallyAcademically}</h4>
                </li>
              </ul>
            </div>
          </div>
        )}

        {wish?.other && (
          <div className="category">
            <h3>Autres</h3>
            <div className="category-border">
              <ul className="product-list">
                <li className="product-item">
                  <h4>{wish.other}</h4>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
