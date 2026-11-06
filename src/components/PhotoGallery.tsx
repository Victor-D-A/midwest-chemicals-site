import "./PhotoGallery.css";
import type { PhotoGroup } from "../data/refinishing";

interface PhotoGalleryProps {
  groups: PhotoGroup[];
}

// Photos of real jobs, in titled groups, each with a short caption.
// Photos are shown no larger than their real size, so they stay sharp.
export default function PhotoGallery({ groups }: PhotoGalleryProps) {
  return (
    <section className="photo-gallery" aria-labelledby="photo-gallery-title">
      <h2 className="photo-gallery__title" id="photo-gallery-title">
        Gallery
      </h2>

      {groups.map((group) => (
        <div className="photo-gallery__group" key={group.title}>
          <h3 className="photo-gallery__group-title">{group.title}</h3>

          {group.intro && <p className="photo-gallery__intro">{group.intro}</p>}

          <ul className="photo-gallery__list">
            {group.photos.map((photo) => (
              <li key={photo.src}>
                <figure className="photo-gallery__figure">
                  <img
                    className="photo-gallery__image"
                    loading="lazy"
                    alt={photo.alt}
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                  />
                  <figcaption className="photo-gallery__caption">{photo.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
