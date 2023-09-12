import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Show () {
    const [id ,setId] =useState([])
    const elId =useParams();
    console.log(elId?.elId);
    useEffect(() => {
        fetch(`https://api.quran.com/api/v4/chapters/${elId?.elId}`).then((res) => {
            return res.json();
        }).then((data) => {
            setId(data);
        })
    },[])
    console.log(id);
    return (
        <>
            <h1 className="text-light">{id?.chapter?.name_arabic}</h1>
        </>
    )
}
export default Show;