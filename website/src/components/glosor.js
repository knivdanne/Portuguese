import { Button, Card, ListGroup, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// MAKE SURE TO USE EXAMPLES FROM BOOTSTRAPREACT https://react-bootstrap.github.io/components/navs/
import Amplify, { API } from 'aws-amplify'
import { getGlosor, listGlosors } from '../graphql/queries'
import React, { useEffect, useState, useRef } from 'react'
import './stylesheet.css';
import awsExports from "../aws-exports";
import content from '../content';
Amplify.configure(awsExports);

// This is the list used to the list of ingredients breakdown for recipe


// This is the list used for instructions
const initialInstructions = ["Query a vocab session to get the words, e.g. try Page1-10 "].map((instruction) => {
    return <ListGroup.Item as="li" className="d-flex justify-content align-items-start">{instruction}</ListGroup.Item>
});

export function DisplayGlosor() {

    const answerInput = useRef(null);

    const [sessionName, setSessionName] = useState([]) //Maybe better word for it, is the name of the group fo vocab

    const [direction, setDirection] = useState(["PT_EN"]) //Maybe better word for it, decides if PT to EN translation or EN to PT

    const [words, setWords] = useState([])
    const [correctCount, setCorrectCount] = useState([0])
    const [totalCount, setTotalCount] = useState([0])


    const [question, setQuestion] = useState(["Need to fetch words first, e.g. Page1-10 "])
    const [answer, setAnswer] = useState([])
    const [answerResult, setAnswerResult] = useState(["None yet done"])
    const [correctLine, setCorrectLine] = useState([""])


    // The flash screen options
    const [flash, setFlash] = useState(["#03fa2d"])
    const [flashVisible, setFlashVisible] = useState(["hidden"])
    const [appVisible, setAppVisible] = useState(["visible"])




    // useEffect says that this function should re-render the UI and any changes to variables in [] should also re-run this function
    // Basically waht we are doing is to say when we change if app is visible or not, like in the feedback fo flashing the screen on action_answer
    // Then we want to make sure we put it back to visible afterwards, issue here is we put it back to visible then it runs again as it changes again
    useEffect(() => {
        setTimeout(function () {
            setAppVisible("visible")
            setFlashVisible("hidden");
        }, 200);
        focusTextBox()
    }, [appVisible])


    // Fetches the list of words from API
    async function fetch_glosor(name = '') {
        console.log(`name ${name}`)
        if (name !== '') {
            setSessionName(name)
            var queryname = name
        } else {
            var queryname = sessionName
        }
        try {
            console.log("API CALLED TO EXTRACT VOCAB DATA")
            const wordlist = await API.graphql({ query: listGlosors, variables: { filter: { sessionname: { eq: queryname } } }, authMode: 'API_KEY' })
            assign_words(wordlist)
        } catch (err) {
            console.log('error fetching words data', err)
        }
        
    }

    //Assigns the fetched words into two lists, one for question and one for answer
    //The list assigned to each depends on if you have selected EN to PT or PT to EN
    function assign_words(wordlist) {
        if (direction == "PT_EN") {
            console.log("PT to EN selected")
            var words = wordlist.data.listGlosors.items.map((word) => { return { question: word.word_pt, answer: word.word_en } })
        }
        else {
            var words = wordlist.data.listGlosors.items.map((word) => { return { question: word.word_en, answer: word.word_pt } })
        }

        words = shuffle(words);
        setWords(words);
        setQuestion(words[0].question)
    }



    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            action_answer()

        }
    }


    async function action_answer() {
        // This is to make it flash a certain color as feedback if right or wrong
        setAppVisible("hidden")
        setFlashVisible("visible");
        if (answer === words[0].answer) {
            setFlash("#03fa2d")
            // Increment the number of correct answers and display
            setCorrectCount(Number(correctCount) + 1)
            setTotalCount(Number(totalCount) + 1)

            // Add feedback of result
            setCorrectLine('');
            setAnswerResult('Correct');

            // Clear fields
            setAnswer('');

            // Remove the answer from list of further choices
            words.shift()
            setWords(words);

        } else {
            setFlash("#fa030f")
            setTotalCount(Number(totalCount) + 1)

            // Add feedback of result
            setCorrectLine(` ,Correct answer was: "${words[0].question}"="${words[0].answer}"`);
            setAnswerResult('Wrong');

            // Clear fields
            setAnswer('');

            // Send the word to bottom of list
            const word = words.shift();
            words.push(word);
            setWords(words);

        }
        if (words.length === 0) {
            setQuestion("All Done, please do new test to continue")
        } else {
            setQuestion(words[0].question)
        }
    }

    function focusTextBox() {
        answerInput.current.focus();
    }


    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    return (

        <div style={{ visibility: flashVisible, background: flash }}>
            <div style={{ visibility: appVisible }} >
                <Container style={{ background: content.color.LightShade, }}>

                    <Row className='pt-5'>

                        <Col>
                            <Row>

                                <Col className="d-inline-flex">
                                    <Button className="button-secondary" size="sm" onClick={() => fetch_glosor("")}>Fetch GLosor for Session</Button>

                                    <input
                                        onChange={event => setSessionName(event.target.value)}
                                        value={sessionName}
                                        placeholder="Session Name"
                                    />
                                    <Button className="button-secondary" size="sm" onClick={() => fetch_glosor("Page1-10")}>Fetch GLosor for Session Page1-10</Button>
                                </Col>

                            </Row>

                        </Col>

                    </Row >

                    <Row className='pt-5'>
                        <Col>
                            <Card className='my-3' style={{ color: "#000" }}>
                                <Card.Body>
                                    <Card.Title> <h1>{question}</h1></Card.Title>
                                    <input
                                        onChange={event => setAnswer(event.target.value)}
                                        onKeyPress={(e) => handleKeyPress(e)}
                                        value={answer}
                                        placeholder="Answer"
                                        ref={answerInput}
                                    />
                                    <Button className="button-secondary" size="sm" onClick={action_answer}>Submit Answer</Button>

                                </Card.Body>
                            </Card>


                        </Col>
                    </Row>

                    <Row className='pt-5'>
                        <Col>
                            <Card className='my-3' >
                                <Card.Body>
                                    <Card.Title> <h1>Stats</h1></Card.Title>
                                    <Card.Text>
                                        <span>Correct out of total {correctCount} / {totalCount}</span>
                                        <br></br>
                                        <span>Last answer was {answerResult}{correctLine}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </div>
        </div >
    )
};