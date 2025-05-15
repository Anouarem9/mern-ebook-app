// src/pages/CreateEBook.tsx
import { useState } from "react";
import axios from "axios";
import "./CreateEBook.css"; // import CSS
import { Link } from "react-router-dom";

const CreateEBook = () => {
  const [form, setForm] = useState({
    ISBN: "",
    titre: "",
    description: "",
    date_edition: "",
    photo: "",
    prix: "",
    categorie: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/ebooks", {
        ...form,
        prix: Number(form.prix),
      });
      alert("EBook created!");
      setForm({
        ISBN: "",
        titre: "",
        description: "",
        date_edition: "",
        photo: "",
        prix: "",
        categorie: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error creating ebook");
    }
  };

  return (
    <div className="create-ebook">
      <h2>Create EBook</h2>
      <form onSubmit={handleSubmit}>
        <input name="ISBN" placeholder="ISBN" value={form.ISBN} onChange={handleChange} required />
        <input name="titre" placeholder="Title" value={form.titre} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input type="date" name="date_edition" value={form.date_edition} onChange={handleChange} required />
        <input name="photo" placeholder="Photo URL" value={form.photo} onChange={handleChange} required />
        <input type="number" name="prix" placeholder="Price" value={form.prix} onChange={handleChange} required />
        <input name="categorie" placeholder="Category" value={form.categorie} onChange={handleChange} required />
        <button type="submit">Create</button>
        <Link to="/">Back</Link>
        
      </form>
    </div>
  );
};

export default CreateEBook;
