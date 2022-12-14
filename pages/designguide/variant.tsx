import React from "react";

import BrutalButton from "@/components/button/brutal";
import ElegantButton from "@/components/button/elegant";
import LinkButton from "@/components/button/link";
import PlayfulButton from "@/components/button/playful";
import PrimaryButton from "@/components/button/primary";
import SimpleButton from "@/components/button/simple";
import IconButton from "@/components/button/icon";

import { UserIcon } from "@heroicons/react/outline";

type Props = {};

function Variants({}: Props) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="flex justify-center py-4 text-2xl">
        Variant pattern used to create Button components
      </h2>
      <div className="bg-gray-200">
        <h3 className="flex justify-center py-2 text-2xl text-gray-500 bg-white">
          bg-gray-200
        </h3>
        <div className="flex py-6 justify-evenly">
          <IconButton>
            <UserIcon className="w-6 h-6 mr-2 text-white" />
            Log In
          </IconButton>
          <SimpleButton>Simple</SimpleButton>
          <SimpleButton disabled>Disabled</SimpleButton>
          <LinkButton>Link</LinkButton>
          <PlayfulButton>Playful</PlayfulButton>
          <BrutalButton>Brutal</BrutalButton>
          <ElegantButton onClick={() => alert("hello")} aria-label="test">
            Elegant
          </ElegantButton>
          <PrimaryButton onClick={() => alert("Wooot")}>Primary</PrimaryButton>
        </div>
        <div className="flex py-6 justify-evenly">
          <IconButton disabled>
            <UserIcon className="w-6 h-6 mr-2 text-white" />
            Log In
          </IconButton>
          <SimpleButton disabled>Simple</SimpleButton>
          <SimpleButton disabled>Disabled</SimpleButton>
          <LinkButton disabled>Link</LinkButton>
          <PlayfulButton disabled>Playful</PlayfulButton>
          <BrutalButton disabled>Brutal</BrutalButton>
          <ElegantButton
            disabled
            onClick={() => alert("hello")}
            aria-label="test"
          >
            Elegant
          </ElegantButton>
          <PrimaryButton disabled onClick={() => alert("Wooot")}>
            Primary
          </PrimaryButton>
        </div>
      </div>
      <div className="bg-gray-400">
        <h3 className="flex justify-center py-2 text-2xl text-gray-500 bg-white">
          bg-gray-400
        </h3>
        <div className="flex py-6 justify-evenly">
          <IconButton>
            <UserIcon className="w-6 h-6 mr-2 text-white" />
            Log In
          </IconButton>
          <SimpleButton>Simple</SimpleButton>
          <SimpleButton disabled>Disabled</SimpleButton>
          <LinkButton>Link</LinkButton>
          <PlayfulButton>Playful</PlayfulButton>
          <BrutalButton>Brutal</BrutalButton>
          <ElegantButton onClick={() => alert("hello")} aria-label="test">
            Elegant
          </ElegantButton>
          <PrimaryButton onClick={() => alert("Wooot")}>Primary</PrimaryButton>
        </div>
        <div className="flex py-6 justify-evenly">
          <IconButton disabled>
            <UserIcon className="w-6 h-6 mr-2 text-white" />
            Log In
          </IconButton>
          <SimpleButton disabled>Simple</SimpleButton>
          <SimpleButton disabled>Disabled</SimpleButton>
          <LinkButton disabled>Link</LinkButton>
          <PlayfulButton disabled>Playful</PlayfulButton>
          <BrutalButton disabled>Brutal</BrutalButton>
          <ElegantButton
            disabled
            onClick={() => alert("hello")}
            aria-label="test"
          >
            Elegant
          </ElegantButton>
          <PrimaryButton disabled onClick={() => alert("Wooot")}>
            Primary
          </PrimaryButton>
        </div>
      </div>
      <div className="bg-gray-600">
        <h3 className="flex justify-center py-2 text-2xl text-gray-500 bg-white">
          bg-gray-600
        </h3>
        <div className="flex py-6 justify-evenly">
          <IconButton>
            <UserIcon className="w-6 h-6 mr-2 text-white" />
            Log In
          </IconButton>
          <SimpleButton>Simple</SimpleButton>
          <SimpleButton disabled>Disabled</SimpleButton>
          <LinkButton>Link</LinkButton>
          <PlayfulButton>Playful</PlayfulButton>
          <BrutalButton>Brutal</BrutalButton>
          <ElegantButton onClick={() => alert("hello")} aria-label="test">
            Elegant
          </ElegantButton>
          <PrimaryButton onClick={() => alert("Wooot")}>Primary</PrimaryButton>
        </div>
        <div className="flex py-6 justify-evenly">
          <IconButton disabled>
            <UserIcon className="w-6 h-6 mr-2 text-white" />
            Log In
          </IconButton>
          <SimpleButton disabled>Simple</SimpleButton>
          <SimpleButton disabled>Disabled</SimpleButton>
          <LinkButton disabled>Link</LinkButton>
          <PlayfulButton disabled>Playful</PlayfulButton>
          <BrutalButton disabled>Brutal</BrutalButton>
          <ElegantButton
            disabled
            onClick={() => alert("hello")}
            aria-label="test"
          >
            Elegant
          </ElegantButton>
          <PrimaryButton disabled onClick={() => alert("Wooot")}>
            Primary
          </PrimaryButton>
        </div>
      </div>
      <div className="bg-gray-800">
        <h3 className="flex justify-center py-2 text-2xl text-gray-500 bg-white">
          bg-gray-800
        </h3>
        <div className="flex py-6 justify-evenly">
          <IconButton>
            <UserIcon className="w-6 h-6 mr-2 text-white" />
            Log In
          </IconButton>
          <SimpleButton>Simple</SimpleButton>
          <SimpleButton disabled>Disabled</SimpleButton>
          <LinkButton>Link</LinkButton>
          <PlayfulButton>Playful</PlayfulButton>
          <BrutalButton>Brutal</BrutalButton>
          <ElegantButton onClick={() => alert("hello")} aria-label="test">
            Elegant
          </ElegantButton>
          <PrimaryButton onClick={() => alert("Wooot")}>Primary</PrimaryButton>
        </div>
        <div className="flex py-6 justify-evenly">
          <IconButton disabled>
            <UserIcon className="w-6 h-6 mr-2 text-white" />
            Log In
          </IconButton>
          <SimpleButton disabled>Simple</SimpleButton>
          <SimpleButton disabled>Disabled</SimpleButton>
          <LinkButton disabled>Link</LinkButton>
          <PlayfulButton disabled>Playful</PlayfulButton>
          <BrutalButton disabled>Brutal</BrutalButton>
          <ElegantButton
            disabled
            onClick={() => alert("hello")}
            aria-label="test"
          >
            Elegant
          </ElegantButton>
          <PrimaryButton disabled onClick={() => alert("Wooot")}>
            Primary
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Variants;
