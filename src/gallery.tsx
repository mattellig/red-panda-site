import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";

const images = [
  {
    id: 1,
    link: "/aspartame.png",
    caption: "Red Pandas love aspartame",
  },
  {
    id: 2,
    link: "https://pm1.narvii.com/6822/51ba160d56c53dbc1d66d96ed83163968196cc57v2_hq.jpg",
    caption: "Another victim of cancel culture",
  },
  {
    id: 3,
    link: "https://pixfeeds.com/images/animals/red-pandas/1280-467029512-red-panda-babies.jpg",
    caption: "Squad goals",
  },
  {
    id: 4,
    link: "https://preview.redd.it/82vbbvgx9et21.jpg?auto=webp&s=72349f91ebae9d822e11df04f7eacc080d195526",
    caption: "Baby red panda getting ready for their glow-up",
  },
];

export default function Gallery() {
  const image = useLoaderData() as any;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dank photos</h1>
      <div className="relative px-4 w-full">
        <figure className="mb-8">
          <img
            className="h-[360px] mx-auto rounded shadow"
            src={image.link}
            alt={image.caption}
          />
          <figcaption className="mt-2 text-gray-600 italic">
            {image.caption}
          </figcaption>
        </figure>
        <div className="flex flex-wrap justify-between gap-6">
          <Link
            to={`/gallery/${image.id - 1}`}
            className={`text-xl font-medium bg-[#ded4d4] rounded-full px-6 py-2 hover:shadow transition ${
              image.id === 1 ? "pointer-events-none opacity-40" : ""
            }`}
          >
            &larr; Previous
          </Link>
          <Link
            to={`/gallery/${image.id + 1}`}
            className={`text-xl font-medium bg-[#ded4d4] rounded-full px-6 py-2 hover:shadow transition ${
              image.id === images[images.length - 1].id
                ? "pointer-events-none opacity-40"
                : ""
            }`}
          >
            Next &rarr;
          </Link>
        </div>
        <p className="mt-8 font-medium text-gray-700 mx-auto max-w-md text-center">
          Would you like to see your photos here?
          <br />
          Send them to{" "}
          <a
            href="mailto:redpandas@shinydocs.com"
            className="text-blue-700 hover:underline"
          >
            redpandas@shinydocs.com
          </a>
        </p>
      </div>
    </div>
  );
}

export function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  return images.find((i) => i.id === Number(id));
}
