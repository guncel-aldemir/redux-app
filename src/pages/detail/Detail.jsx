import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import "./Details.scss";
import Navbar from "../../components/navbar/Navbar";
const Detail = () => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);
  return (
    <>
      <Navbar />
      <div className="detailSide">
        {loading && <Loading />}

        {char && (
          <div className="informationSide">
            <img src={char.img} alt="" style={{ width: "40%" }} />
            <h1>
              {char.name} ({char.nickname})
            </h1>
            <h3><b>Real Name:</b> {char.portrayed}</h3>
            <h4><b>Birthday:</b> {char.birthday}</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
