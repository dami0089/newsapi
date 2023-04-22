import { useState, useEffect } from "react";
import { formatearFecha } from "../helpers/formatearFecha";





const PreviewNoticia = ({ news }) => {
  const { title, description, url, publishedAt, urlToImage } = news;
  const [imageUrl, setImageUrl] = useState("");


  useEffect(() => {
    if (!urlToImage) {
      // Si no hay una imagen en la URL, llamamos a la API de DALL-E 2
      generarImagen(title).then((url) => setImageUrl(url));
    }

  }, []);

  async function generarImagen(titulo) {
    const response = await fetch(
      `https://api.openai.com/v1/images/generations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         // Authorization: `Bearer acapegarlaapikeydeopenai`,
        },
        body: JSON.stringify({
          model: "image-alpha-001",
          prompt: `A news image about ${titulo}`,
          num_images: 1,
        }),
      }
    );

    const data = await response.json();

    return data.data[0].url;
  }

  return (
    <>
      <div className="border-b p-14 flex flex-col md:flex-col text-start">
        <div className="flex items-start">
          <img
            src={urlToImage ? urlToImage : imageUrl}
            alt={title}
            className="rounded-lg h-40 w-60 object-cover mx-2 border "
          />

          <div className="flex flex-col items-start gap-2">
            <h2 className="text-black text-xl uppercase">{title}</h2>
            <p className="flex-1 text-sm">{description}</p>
          </div>
        </div>

        <div className="flex justify-between items-end flex-row mt-2 ">
          <p className="">{formatearFecha(publishedAt)}</p>
          <a
            href={`${url}`}
            className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold mt-2 bg-green-200 rounded-lg p-1"
          >
            Leer Noticia
          </a>
        </div>
      </div>
    </>
  );
};

export default PreviewNoticia;
