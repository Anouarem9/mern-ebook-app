import { useState } from "react";
import type { EBook } from "../../../types/EBook";
import "./CreateEBook.css";
import { createEBook } from "../../../services/ebook-services";

const CreateEBook = () => {
  const [form, setForm] = useState<EBook>({
    ISBN: "",
    titre: "",
    description: "",
    date_edition: "",
    photo: "",
    prix: 0,
    categorie: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "prix" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEBook(form);
      alert("EBook created successfully!");
      setForm({ ISBN: "", titre: "", description: "", date_edition: "", photo: "", prix: 0, categorie: "" });
    } catch {
      alert("Error creating eBook");
    }
  };

  return (
    <div className="create-ebook">
      <h2>Create New EBook</h2>
      <form onSubmit={handleSubmit} className="create-ebook-form">
        <input type="text" name="ISBN" placeholder="ISBN" value={form.ISBN} onChange={handleChange} required />
        <input type="text" name="titre" placeholder="Titre" value={form.titre} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input type="date" placeholder="date_edition" name="date_edition" value={form.date_edition} onChange={handleChange} required />
        <input type="text" name="photo" placeholder="Photo Path (/images/xyz.jpg)" value={form.photo} onChange={handleChange} />
        <input type="number" name="prix" placeholder="Prix" value={form.prix} onChange={handleChange} required />
        <input type="text" name="categorie" placeholder="Categorie" value={form.categorie} onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateEBook;
