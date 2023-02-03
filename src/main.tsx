import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Gallery, { loader as galleryLoader } from "./gallery";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <div className="flex items-center flex-wrap gap-8">
              <img
                className="h-[480px] rounded-lg shadow-lg"
                src="https://media.tenor.com/RJNmKeqJEJ4AAAAd/turning-red-panda-mei.gif"
                alt="Red panda dancing"
              />
              <div className="max-w-xs text-xl space-y-6">
                <p>Why the red panda is bussin, no 🧢.</p>
                <p>
                  This totes girlboss critter will live rent free in your head,
                  fr fr
                </p>
                <p>
                  We're about to flex 💪 all the high key 🔑 reasons you should
                  stan the Red Panda, who's the 🐐🐐🐐🐐🐐🐐
                </p>
                <p className="font-medium">
                  Use the nav above to see why Red Pandas totes pass the vibe
                  check, and that's the tea 🍵🍵🍵
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        path: "scientific",
        element: (
          <div>
            <h1>Scientific information</h1>
          </div>
        ),
      },
      {
        path: "gallery/:id",
        element: <Gallery />,
        loader: galleryLoader,
      },
      {
        path: "anatomy",
        element: (
          <div>
            <h1>Anatomy and biology</h1>
          </div>
        ),
      },
      {
        path: "facts",
        element: (
          <div>
            <h1 className="text-2xl font-semibold mb-6">Vibe check</h1>
            <img
              src="https://murally.blob.core.windows.net/uploads/harnesschange8714/0-1675358637301.jpeg?se=2023-02-02T17%3A31%3A00Z&sp=r&sv=2018-03-28&sr=b&rscc=public%2C%20max-age%3D600&sig=%2Fi%2BieaW4lz2hsb4yxaGX22bxIbLyIufu8oASW9e2CZU%3D"
              alt="Red panda scratching an ear"
              className="h-[280px] mx-auto mb-8"
            />
            <h2 className="text-lg font-medium mb-6">
              Don't be salty 🧂, we've got the facts that are no 🧢
            </h2>
            <ul className="space-y-2">
              <li>💤 They spend two-thirds of the day sleeping</li>
              <li>😴 Red pandas sleep on their tail</li>
              <li>🎍 A red panda's diet is 90% bamboo</li>
            </ul>
          </div>
        ),
      },
      {
        path: "diet",
        element: (
          <div>
            <h1>Diet information</h1>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
