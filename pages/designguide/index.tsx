import Link from "next/link";
import React from "react";

type Props = {};

function DesignGuide({}: Props) {
  return (
    <div className="container mx-auto text-neutral-700">
      <h2 className="flex justify-center py-8 text-2xl">
        Design Pattern Guide
      </h2>
      <p>Links to showcase pages for these components</p>
      <ul className="flex flex-col gap-4 mt-8">
        <li className="">
          <Link href="../designguide/variant">Variant Buttons</Link>
        </li>
        <li className="">
          <Link href="../designguide/polymorphic">
            Polymorphic Text Component
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DesignGuide;
