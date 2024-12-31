import { useEffect, useState } from "react";
import { useCreateWishMutation } from "./wishesApiSlice";
import { useNavigate } from "react-router-dom";

export default function WishesForm() {
  const [spiritually, setSpiritually] = useState("");
  const [familiallyRelationally, setFamiliallyRelationally] = useState("");
  const [financiallyMaterially, setFinanciallyMaterially] = useState("");
  const [professionallyAcademically, setProfessionallyAcademically] =
    useState("");

  const [newWish, setNewWish] = useState("");

  const [other, setOther] = useState("");
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState("");

  const [createWish, { isLoading, isError, error }] = useCreateWishMutation();

  const navigate = useNavigate();

  function validateData() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic regex for email validation

    if (
      !spiritually &&
      !familiallyRelationally &&
      !financiallyMaterially &&
      !professionallyAcademically &&
      !other
    ) {
      return "Veuillez formuler au moins un voeux";
    }

    if (!email) {
      return "Le mail est requis";
    }

    if (!emailRegex.test(email)) {
      return `Le mail : '${email}' est invalide`;
    }

    return null; // Aucune erreur, validation réussie
  }

  useEffect(() => {
    if (newWish) {
      navigate(`/my-wishes/${newWish._id}`);
      setSpiritually("");
      setFamiliallyRelationally("");
      setFinanciallyMaterially("");
      setProfessionallyAcademically("");
      setOther("");
      setEmail("");
    }
  }, [newWish, navigate]);

  async function onSaveWish(e) {
    e.preventDefault();

    const validationError = validateData();
    if (validationError) {
      setValidationError(validationError);
    }

    setValidationError("");

    if (!validationError) {
      let response = await createWish({
        spiritually,
        familiallyRelationally,
        financiallyMaterially,
        professionallyAcademically,
        other,
        email,
      }).unwrap();

      setNewWish(response);

      if (error) {
        // console.log(`Erreur serveur: ${error?.data?.message}`);
      }
    } else {
      // console.log(validationError);
    }
  }

  return (
    <form className="custom-form hero-form" onSubmit={onSaveWish}>
      <h3 className="text-white mb-3">
        Seigneur, avec foi, je te présente mes vœux pour 2025
      </h3>

      {validationError && (
        <div className="alert alert-danger" role="alert">
          {validationError}
        </div>
      )}

      {/* Affichage des erreurs du serveur */}
      {isError && (
        <div className="alert alert-danger" role="alert">
          Une erreur est survenue: {error?.data?.message || "Erreur inconnue"}
        </div>
      )}

      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <label htmlFor="spiritually" className="text-white">
            Spirituellement
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi-person custom-icon" />
            </span>
            <input
              type="text"
              name="spiritually"
              id="spiritually"
              className="form-control"
              placeholder="Sur le plan spirituel"
              value={spiritually}
              onChange={(e) => setSpiritually(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <label htmlFor="familially-relationally" className="text-white">
            Familialement et relationnellement
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi-people custom-icon" />
            </span>
            <input
              type="text"
              name="familially-relationally"
              id="familially-relationally"
              className="form-control"
              placeholder="Sur le plan familial et relationnel"
              value={familiallyRelationally}
              onChange={(e) => setFamiliallyRelationally(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <label htmlFor="financially-materially" className="text-white">
            Financièrement et matériellement
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi-cash custom-icon" />
            </span>
            <input
              type="text"
              name="financially-materially"
              id="financially-materially"
              className="form-control"
              placeholder="Sur le plan financier et matériel"
              value={financiallyMaterially}
              onChange={(e) => setFinanciallyMaterially(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <label htmlFor="professionally-academically" className="text-white">
            Professionnellement et académiquement
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi-briefcase custom-icon" />
            </span>
            <input
              type="text"
              name="professionally-academically"
              id="professionally-academically"
              className="form-control"
              placeholder="Sur le plan professionnel et les études"
              value={professionallyAcademically}
              onChange={(e) => setProfessionallyAcademically(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-12 col-12">
          <label htmlFor="other" className="text-white">
            Autres
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi-puzzle custom-icon" />
            </span>
            <textarea
              name="other"
              id="other"
              className="form-control"
              rows={3}
              value={other}
              onChange={(e) => setOther(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi-envelope custom-icon" />
            </span>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="mon email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <label htmlFor="button" className="text-white">
            _
          </label>
          <button type="submit" className="form-control">
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
}
