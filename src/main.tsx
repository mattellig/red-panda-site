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
            <h1 className="text-2xl font-semibold mb-6">The tea</h1>
            <ul className="space-y-2">
              <li>Height: 50-64cm</li>
              <li>Weight: 3-15kg</li>
              <li>Lifespan: 15 Years Unique</li>
              <li>
                Characteristics: Red pandas are carnivores, but primarily
                subsist on bamboo The red panda is the only non-primate mammal
                that shows a preference for aspartame
              </li>
              <li>How it breathes: Respiration/lungs</li>
            </ul>
          </div>
        ),
      },
      {
        path: "gallery/:id",
        element: <Gallery />,
        loader: galleryLoader,
      },
      {
        path: "facts",
        element: (
          <div>
            <h1 className="text-2xl font-semibold mb-6">Vibe check</h1>
            <img
              src="/scratching.jpeg"
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
            <h1 className="text-2xl font-semibold mb-6">Boujee eats</h1>
            <ul className="space-y-2">
              <li>
                Red Panda's have a highly specialized Carnivore diet based
                95-98% bamboo leaves and shoots. Out of all available species of
                bamboo in the habitat only two are eaten (Wei & Zhang 2011) and
                only during winter
              </li>
              <li>Occasionally eat eggs, lizards, fruit and birds</li>
              <li>
                Typically only pregnant females will eat live prey for extra
                protein and nutrients
              </li>
            </ul>
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
