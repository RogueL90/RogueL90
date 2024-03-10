import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const TeamCards = () => {
  return (
    <>
      <div className="flex gap-10 justify-center flex-col lg:flex-row">
        <CardContainer className="inter-var">
          <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-black text-center"
            >
              Aahan Shah
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              CEO
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src="circle logo.png" width="175" height="175" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-black text-center"
            >
              Pranay Jain
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              CEO
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src="circle logo.png" width="175" height="175" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-black text-center"
            >
              Vasista Ramachandruni
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              CTO
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src="circle logo.png" width="175" height="175" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default TeamCards;
