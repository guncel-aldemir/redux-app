import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import { selectCharacters,fetchCharacters,selectError,selectPage, selectStatus } from "../../redux/charactersSlice/CharactersSlice";
import Masonry from 'react-masonry-css';
import "./Header.scss";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { Link } from "react-router-dom";
const Header = () => {
    const dispatch = useDispatch();

    
    const charactersDatas = useSelector(selectCharacters)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)
    const nextPage = useSelector(selectPage)
    const hasNextPage = useSelector((state)=>state.characters.hasNextPage)
    useEffect(()=>{
        if(status === "idle"){
            dispatch(fetchCharacters())
        }
       
    },[status,dispatch])

    if( status === "failed"){
        return(
            <Error message={error}/>
        )
    }
  return <div className="header">
   <Masonry
  breakpointCols={2}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {/* array of JSX items */}
  {charactersDatas.map((item)=>(
    <div className="characters" key={item.char_id}  >
        <img src={item.img} alt="" />
        <Link to={`char/${item.char_id}`}>
        <h3 className="text">{item.name} ({item.nickname})</h3>
        </Link>
        <h4 className="text"><b>Artist Name:</b> {item.portrayed}</h4>
    </div>
  ))}
</Masonry>
{status ==="loading" && <Loading/>}
{hasNextPage && status !== "loading" && <div className="buttonSide">
    <button onClick={()=>dispatch(fetchCharacters(nextPage))}>Load more...</button>
    </div>}
    {
        !hasNextPage && <div style={{color:"#fff"}}>There is nothing to be shown!</div>
    }

    </div>;
};

export default Header;
