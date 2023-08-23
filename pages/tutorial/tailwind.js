import { useState } from "react";
import Link from "next/link";
import ButtonGradient from "../../components/ButtonGradient";
import Modal from "@/components/Modal";
import ButtonPopover from "@/components/ButtonPopover";
import TestimonialSmall from "@/components/TestimonialSmall";
import BetterIcon from "@/components/BetterIcon";

export default function Home() {
  const [key, setKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Tailwind — Ship Fast ⚡️</h1>

        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/tutorial" className="items-center flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clipRule="evenodd"
                  />
                </svg>
                Tutorial
              </Link>
            </li>
            <li>Tailwind</li>
          </ul>
        </div>
      </section>

      {/* ANIMATIONS */}
      <section>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Animations</h2>
            <button
              className="btn btn-sm"
              onClick={() => setKey((pre) => pre + 1)}
            >
              Replay
            </button>
          </div>
          <p className="opacity-80">Add animate-[name] to any JSX className.</p>
        </div>

        <div className="space-y-6">
          {[
            { name: "animate-opacity" },
            { name: "animate-appearFromRight" },
            { name: "animate-popup" },
            { name: "animate-wiggle" },
          ].map((a, i) => (
            <div key={i} className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-8 h-8 ${a.name}`}
                key={key}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                />
              </svg>

              <pre className="text-sm opacity-80">{a.name}</pre>
            </div>
          ))}
        </div>
      </section>

      {/* COMPONENTS */}
      <section>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Components</h2>
          <p className="opacity-80">
            Lots of components (spinners, accordions etc..) are available at{" "}
            <a
              href="https://daisyui.com/components/"
              className="link"
              target="_blank"
            >
              DaisyUI
            </a>
            .<br />
            Here are some extras I made. Find them in the /components folder.
          </p>
        </div>
        <div className="space-y-8">
          {[
            { component: <ButtonGradient />, name: "<ButtonGradient />" },
            { component: <ButtonPopover />, name: "<ButtonPopover />" },
            {
              component: (
                <div>
                  <button className="btn" onClick={() => setIsModalOpen(true)}>
                    Modal
                  </button>
                  <Modal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              ),
              name: "<Modal />",
            },
            { component: <TestimonialSmall />, name: "<TestimonialSmall />" },
            { component: <BetterIcon />, name: "<BetterIcon />" },
          ].map((c, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>{c.component}</div>
              <pre className="text-sm opacity-80">{c.name}</pre>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
