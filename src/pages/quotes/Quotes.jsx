import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {fetchAllQuotes,selectStatus,selectError} from "../../redux/quotesSlice/QuotesSlice";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import "./Quotes.scss";
const Quotes = () => {
  const quetosDatas = useSelector((state) =>
    state.quotes.quotesItems.slice(0, 30)
  );
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
 
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);
  if (status === "failed") {
    return <Error message={error} />;
  }
  return (
    <>
      <Navbar />
      {status === "loading" && <Loading />}
      <div className="quetosSide">
        {status === "succeded" &&
          quetosDatas.map((item) => (
            <div className="quetos" key={item.quote_id}>
              <h3><q>{item.quote}</q></h3>
              <h2>{item.author}</h2>
            </div>
          ))}
      </div>
    </>
  );
};

export default Quotes;
