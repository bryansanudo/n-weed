import { Link, useParams } from "react-router-dom";
import Section from "@/components/common/Section";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import { FaInstagram, FaArrowLeft } from "react-icons/fa";
import IconInstagram from "@/icons/IconInstagram";

const PublicationsDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { title } = details;

  const getData = async () => {
    const docRef = doc(db, "publications", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDetails(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Section title={title}>
        <div className="shadow-lg shadow-primary p-10 rounded-xl flex flex-col gap-6 items-center">
          <div className="flex justify-between w-full">
            <Link to="/publications">
              <FaArrowLeft className="text-4xl " />
            </Link>
            <a href={details.instagram} target="_blank">
              <IconInstagram className="animate-pulse text-5xl" />
            </a>
          </div>

          <img
            src={details.imageURL}
            className="rounded-xl shadow-md shadow-gray-500  h-full max-h-[500px] object-contain"
          />

          <p>{details.desc}</p>
        </div>
      </Section>
    </>
  );
};

export default PublicationsDetails;
