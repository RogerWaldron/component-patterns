import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="mx-auto prose">
      <h2 className="mt-8"></h2>
      <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Design pattern playground for creating components
      </h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Patterns used include:
      </p>
      <ul>
        <li>Polymorphic</li>
        <li>Variant</li>
      </ul>
    </div>
  );
};

export default Home;
