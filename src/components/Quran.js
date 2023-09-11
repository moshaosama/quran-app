import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurah } from "../Store/Reducers/SurahSlice";
import { Card, Col, Container, Row } from "react-bootstrap";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from "react-router-dom";

function Quran () {
    const state = useSelector(state => state.Surah);
    const Dispatch =useDispatch()
    useEffect(() => {
        Dispatch(fetchSurah())
    },[])
    console.log(state.chapters);
    return (
        <Container>
            <Row>
                {
                    state?.chapters?.map((el) => (
                        <Col>
                            <Card className="Card">
                                <Card.Body>
                                    <Card.Title className="d-flex" id="CardTitle">
                                        <h1>{el?.name_arabic}</h1>
                                        <Link to={"Show"}>
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
    )
}

export default Quran;