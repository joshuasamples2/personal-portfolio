import {Container} from "react-bootstrap"
export default function Header(){
    return(
        <Container>
            <nav>
            <div>Joshua Samples Portfolio</div>
            <ul>
                <a href="#About-me">About Me</a>
                <a href="#work">Work</a>
                <a href="#Contact-me">Contact Me</a>
            </ul>
            </nav>
        </Container>
    )
}