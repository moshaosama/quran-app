import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurah } from "../Store/Reducers/SurahSlice";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from "react-router-dom";
import swal from 'sweetalert2'

function Quran () {

    const [current ,setcurrent] = useState(1);
    const items =9;
    const lastitems= current * items;
    const firstitems = lastitems - items;

    const npage = Math.ceil(114 / items);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    console.log(numbers);
    const state = useSelector(state => state.Surah);
    const Dispatch =useDispatch()
    useEffect(() => {
        Dispatch(fetchSurah())
    },[])
    return (
        <>
        <Container>
            <Row>
                {
                    state?.chapters?.slice(firstitems ,lastitems)?.map((el) => (
                        <Col key={el?.id}>
                            <Card className="Card">
                                <Card.Body>
                                    <Card.Title className="d-flex" id="CardTitle">
                                        <h1 >{el?.name_arabic}</h1>
                                        <Link to={`/${el?.id}`}>
                                            <div className="btn btn-outline-dark" id="Btn">
                                                Show
                                            </div>
                                        </Link>
                                    </Card.Title>
                                    <Card.Text>
                                        <ReactAudioPlayer
                                            src={`https://server7.mp3quran.net/basit/`+ ('00' + el?.id).slice(-3) + '.mp3'}
                                            controls
                                            
                                        />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
        <Container id="pagination">
            <div className="pagination" id="Buttons">
                <li className="page-item"> 
                    <Button variant="light" onClick={(e) => {
                        e.preventDefault();
                        if(current<=1){
                            swal.fire({
                                title:"can not Prev Again",
                                icon:'error',
                                showCancelButton:true,
                            })
                        }
                        else{
                            setcurrent(current -1)
                        }
                    }}>
                        Prev
                    </Button>
                </li>
                {
                    numbers?.map((el) => {
                        return (
                            <li className={`page-item ${current === el ? 'active' :''}`} key={el}>
                                <Button variant="light" id="nBtn" onClick={(e) => {
                                    e.preventDefault()
                                    setcurrent(el)
                                    document.getElementById("nBtn").style.color = "blue";
                                }}>
                                    {el}
                                </Button>
                            </li>
                        )
                    })
                }
                <li className="page-item">
                    <Button variant="light" onClick={(e) => {
                        e.preventDefault();

                        if(current>=13){
                            swal.fire({
                                title:"can not Next Again",
                                icon:'error',
                                showCancelButton:true,
                            })
                        }
                        else{
                            setcurrent(current + 1)
                        }
                    }}>
                        Next
                    </Button>
                </li>
            </div>
        </Container>
        </>
    )
}

export default Quran;