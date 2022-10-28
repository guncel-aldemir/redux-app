import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import { selectCharacters,fetchCharacters,selectIsloading,selectError,selectPage } from "../../redux/charactersSlice/CharactersSlice";
import Masonry from 'react-masonry-css';
import "./Header.scss";
import Loading from "../loading/Loading";
import Error from "../error/Error";
const Header = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCharacters())
    },[dispatch])
    const charactersDatas = useSelector(selectCharacters)
    const isLoading = useSelector(selectIsloading)
    const error = useSelector(selectError)
    const nextPage = useSelector(selectPage)
    const hasNextPage = useSelector((state)=>state.characters.hasNextPage)
    console.log("charactersDatas",charactersDatas);
    console.log("nextPage",nextPage);

    if(error){
        return(
            <Error/>
        )
    }
  return <div className="header">
   <Masonry
  breakpointCols={3}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {/* array of JSX items */}
  {charactersDatas.map((item)=>(
    <div className="characters" key={item.char_id}  >
        <img src={item.img} alt="" />
        <h3 className="text">{item.name} ({item.nickname})</h3>
        <h4 className="text"><b>Artist Name:</b> {item.portrayed}</h4>
    </div>
  ))}
</Masonry>
{isLoading && <Loading/>}
{hasNextPage && !isLoading && <div className="buttonSide">
    <button onClick={()=>dispatch(fetchCharacters(nextPage))}>{nextPage}Load more...</button>
    </div>}
    {
        !hasNextPage && <div style={{color:"#fff"}}>There is nothing to be shown!</div>
    }

    </div>;
};

export default Header;
