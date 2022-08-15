import React from "react";

import Text from "@/components/text";
type Props = {};

function Polymorphic({}: Props) {
  return (
    <div className="flex flex-col gap-8 bg-gray-200">
      <h2 className="flex justify-center py-4 text-2xl">
        Polymorphic Pattern used to create Text component
      </h2>
      <ul className="prose">
        <li>
          Page itself is marked up with Tailwind. Text Component is using CSS
          styles from styles/globals.css
        </li>
        <li>
          Using Tailwind styles passed in as props using className worked fine.
        </li>
        <li className="text-orange-600 dark:text-orange-400">
          Tailwind inside the component however was hit or miss if it worked,
          need to explore further to discover why.
        </li>
      </ul>
      <div className="flex flex-col">
        <Text size="sm" color="white" bgColor="brand">
          Background brand Text sm white
        </Text>
        <Text size="lg" color="white" bgColor="brand">
          Background brand Text lg white
        </Text>
        <Text size="xl" color="white" bgColor="brand">
          Background brand Text xl white
        </Text>
        <Text size="2xl" color="white" bgColor="brand">
          Background brand Text 2xl white
        </Text>
      </div>
      <div className="flex flex-col">
        <Text size="sm" color="white" bgColor="black">
          Background black Text sm white
        </Text>
        <Text size="lg" color="white" bgColor="black">
          Background black Text lg white
        </Text>
        <Text size="xl" color="white" bgColor="black">
          Background black Text xl white
        </Text>
        <Text size="2xl" color="white" bgColor="black">
          Background black Text 2xl white
        </Text>
      </div>
      <div className="flex flex-col">
        <Text size="sm" color="black" bgColor="white">
          Background white Text sm black
        </Text>
        <Text size="lg" color="black" bgColor="white">
          Background white Text lg black
        </Text>
        <Text size="xl" color="black" bgColor="white">
          Background white Text xl black
        </Text>
        <Text size="2xl" color="black" bgColor="white">
          Background white Text 2xl black
        </Text>
      </div>
      <div className="flex flex-col">
        <Text size="sm" color="primary" bgColor="white">
          Background white Text sm primary
        </Text>
        <Text size="lg" color="primary" bgColor="white">
          Background white Text lg primary
        </Text>
        <Text size="xl" color="primary" bgColor="white">
          Background white Text xl primary
        </Text>
        <Text size="2xl" color="primary" bgColor="white">
          Background white Text 2xl primary
        </Text>
      </div>
      <div className="flex flex-col">
        <Text
          className="flex justify-center"
          size="sm"
          color="secondary"
          bgColor="black"
          as="span"
        >
          Background Black Text sm secondary AS span element
        </Text>
        <Text size="lg" color="secondary" bgColor="black" as="p">
          Background Black Text lg secondary AS p element
        </Text>
        <Text size="xl" color="secondary" bgColor="black" as="h1">
          Background Black Text xl secondary AS h1 element
        </Text>
        <Text size="2xl" color="secondary" bgColor="black" as="h2">
          Background Black Text 2xl secondary AS h2 element
        </Text>
      </div>
    </div>
  );
}

export default Polymorphic;
