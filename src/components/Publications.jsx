import Section from "@/components/common/Section";

import useFetchCollection from "@/customHooks/useFetchCollection";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";

const Publications = () => {
  const { data, isLoading } = useFetchCollection("publications");

  console.log(data);

  return (
    <>
      <Section title="@eli.caro12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((publication) => (
            <div
              key={publication.id}
              className="shadow-lg shadow-gray-500 rounded-xl p-4 flex flex-col justify-between items-center gap-4 "
            >
              <div className="flex justify-between items-center w-full ">
                <h2 className="text-3xl capitalize ">{publication.title}</h2>
                <Link to={`/publications/${publication.id}`}>
                  <IoMdMore className="text-5xl animate-pulse text-primary font-extrabold" />
                </Link>
              </div>

              <img
                src={publication.imageURL}
                alt=""
                className=" object-cover h-[250px] w-[250px] shadow-md shadow-primary  rounded-xl "
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Publications;
