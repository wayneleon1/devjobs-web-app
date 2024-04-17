import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/UI/HsButton";
import scoot from "../assets/logos/scoot.svg";

function SlugPage() {
  const { job } = useParams();
  const requirements = [
    { content: "Morbi interdum mollis sapien. Sed" },
    {
      content:
        "Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus",
    },
    {
      content:
        "Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.",
    },
    {
      content: "Morbi interdum mollis sapien. Sed",
    },
  ];
  return (
    <>
      <div className="relative pt-20">
        <div className="h-[140px] flex rounded-md overflow-hidden absolute top-[-50px] left-0 right-0">
          <div className="h-full w-[140px] bg-[#E99210] flex items-center justify-center">
            <img src={scoot} alt="Job-Img" className="w-20" />
          </div>
          <div className="h-full flex-1 bg-white flex items-center justify-between p-10 dark:bg-VeryDarkBlue">
            <div>
              <h1 className="font-bold text-VeryDarkBlue dark:text-white">
                Scoot
              </h1>
              <p className="text-DarkGrey">scoot.com</p>
            </div>
            <div>
              <Button
                title="Company Site"
                styles="text-PrimaryViolet bg-PrimaryViolet/10 hover:bg-PrimaryViolet/30 dark:bg-white/10 dark:!text-white dark:hover:bg-white/25 !text-PrimaryViolet"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 mb-11 p-12 bg-white rounded-sm flex flex-col gap-10 dark:bg-VeryDarkBlue">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-DarkGrey">1w ago . Part Time</p>
              </div>
              <div>
                <h1 className="font-bold text-VeryDarkBlue dark:text-white">
                  {job}
                </h1>
              </div>
              <div>
                <h4 className="font-bold text-PrimaryViolet">United Kingdom</h4>
              </div>
            </div>
            <div>
              <Button title="Apply Now" />
            </div>
          </div>
          <div>
            <p className="text-DarkGrey">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-7 text-VeryDarkBlue dark:text-white">
              Requirements
            </h3>
            <p className="text-DarkGrey mb-6">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <div className="flex gap-2 flex-col">
              {requirements.map((item, index) => {
                return (
                  <div className="flex items-center gap-9">
                    <div className="w-[8px] h-[8px] bg-PrimaryViolet rounded-full"></div>
                    <p className="text-DarkGrey" key={index}>
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-7 text-VeryDarkBlue dark:text-white">
              What You Will Do
            </h3>
            <p className="text-DarkGrey mb-6">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
              fermentum et, dapibus sed, urna.
            </p>
            <div className="flex gap-2 flex-col">
              {requirements.map((item, index) => {
                return (
                  <div className="flex items-center gap-9">
                    <div className="text-PrimaryViolet font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-DarkGrey" key={index}>
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full absolute left-0 right-0 dark:bg-VeryDarkBlue">
        <div className="container mx-auto px-10 py-6 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-VeryDarkBlue dark:text-white mb-3">
              {job}
            </h1>
            <p className="text-DarkGrey">So Digital Inc.</p>
          </div>
          <div>
            <Button title="Apply Now" />
          </div>
        </div>
      </div>
      <div className="hidden">
        <div className="bg-[#E99210]"></div>
        <div className="bg-[#E54D25]"></div>
        <div className="bg-[#34353f]"></div>
        <div className="bg-[#2F4FC7]"></div>
        <div className="bg-[#132034]"></div>
        <div className="bg-[#4E1853]"></div>
        <div className="bg-[#4722C6]"></div>
        <div className="bg-[#21427D]"></div>
        <div className="bg-[#F2DECB]"></div>
        <div className="bg-[#1F1F1F]"></div>
        <div className="bg-[#37C790]"></div>
        <div className="bg-[#F16718]"></div>
      </div>
    </>
  );
}

export default SlugPage;
