const imagesMap = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG,SVG}",
  { eager: true, import: "default" }
);

const images = Object.entries(imagesMap)
  .map(([path, url]) => ({
    path,
    url,
    name: path.split("/").pop(),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const Galerie = () => {
  return (
    <section className="galerie">
      <h2>Galerie des images</h2>
      <p className="galerie-desc">
        Toutes les images du dossier assets sont importees pour etre visibles
        apres le deploiement.
      </p>
      <div className="galerie-grid">
        {images.map((img) => (
          <figure key={img.path} className="galerie-item">
            <img src={img.url} alt={img.name} loading="lazy" decoding="async" />
            <figcaption>{img.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Galerie;
