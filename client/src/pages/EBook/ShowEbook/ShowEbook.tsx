import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { EBook } from "../../../types/EBook";
import { getEBookById } from "../../../services/ebook-services";
import "./ShowEBook.css";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function ShowEBook() {
  const { ISBN } = useParams();
  console.log(ISBN);
  const [ebook, setEbook] = useState<EBook | null>(null);

  useEffect(() => {
    if (ISBN) getEBookById(ISBN).then(setEbook).catch(console.error);
  }, [ISBN]);
  
  if (!ebook) return <p>Loading...</p>;

  return (
    <div className="ebook-detail">
      <div className="ebook-card">
        <img src={`${VITE_API_URL}${ebook.photo}`} alt={ebook.titre} className="ebook-image" />
        <div className="ebook-info">
          <h2>{ebook.titre}</h2>
          <p className="ebook-category">Catégorie: {ebook.categorie}</p>
          <p className="ebook-description">{ebook.description}</p>
          <p className="ebook-meta">
            <span>ISBN: {ebook.ISBN}</span>
            <span>Date: {ebook.date_edition}</span>
          </p>
          <p className="ebook-price">{ebook.prix} MAD</p>
          <Link to="/ebooks">← Back to list</Link>
        </div>
      </div>
    </div>
  );
}
