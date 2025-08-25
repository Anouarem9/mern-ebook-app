import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { EBook } from "../../../types/EBook";
import { getAllEBooks } from "../../../services//ebook-services";
import "./ListingEBooks.css";

export default function ListingEBooks() {
  const [ebooks, setEbooks] = useState<EBook[]>([]);

  useEffect(() => {
    getAllEBooks().then(setEbooks).catch(console.error);
  }, []);

  return (
    <div className="ebook-listing">
  <h2>EBooks</h2>
  <div className="ebook-grid">
    {ebooks.map((ebook) => (
      <div className="ebook-card" key={ebook.ISBN}>
        <img
          src={`${import.meta.env.VITE_API_URL}${ebook.photo}`}
          alt={ebook.titre}
        />
        <div className="ebook-content">
          <h3>{ebook.titre}</h3>
          <p className="categorie">{ebook.categorie}</p>
          <p className="price">{ebook.prix} MAD</p>
          <Link to={`/${ebook.ISBN}`} className="view-btn">
            View
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
