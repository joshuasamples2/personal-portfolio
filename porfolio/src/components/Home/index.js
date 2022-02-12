import { Container, Image } from "react-bootstrap";
import Camping from "../../images/camping.png";
import CodeQuiz from "../../images/codequiz.png";
import Github from "../../images/githubprofile.png";
import Horiseon from "../../images/Horiseon.png";
import Resume from "../../images/resume.png";
import WeatherDashboard from "../../images/Weather.png";
import WorkDayScheduler from "../../images/workday.png";
import ProfilePic from "../../images/placeholder.jpg"
export default function Home(){
    return(
        <Container>
            <div id ="bio">
            <div id="About-me">

                <h1>
                    About Me
                </h1>
                <p> Hi, i'm Joshua Samples. I am from Heard County, Georgia. It's a small town around a hour and a half west of Atlanta. I have been working construction doing hardwood floors the last couple of years. I have always known that i've always wanted to do something in technology.</p>
            </div>
            </div>
            <div id="Picture-of-myself">
                <Image src ={ProfilePic} alt="ProfilePic" />
                </div>
                <div class="card">
    <a href={Resume}><Image src={Resume}alt="resume"/></a>
</div>
<div id= "work">
<div class="card">
    <a href="https://github.com/joshuasamples2/"><Image src={Github} alt="github"/></a>
</div>
<div class="card">
    <a href="https://joshuasamples2.github.io/code-refactor/"><Image src={Horiseon} alt="code-refactor"/></a>
</div>
<div class="card">
    <a href="https://joshuasamples2.github.io/Weather-Dashboard/"><Image src={WeatherDashboard} alt="weather"/></a>
</div>
<div class="card">
    <a href="https://joshuasamples2.github.io/code-quiz/"><Image src={CodeQuiz} alt="codequiz"/></a>
</div>
<div class="card">
    <a href="https://joshuasamples2.github.io/Work-Day-Scheduler/"><Image src={WorkDayScheduler} alt="scheduler"/></a>
</div>
<div class="card">
    <a href="https://vincentmomot.github.io/Camping-in-the-SouthEast/" ><Image src={Camping} alt="camping"/></a>
</div>

</div>
        </Container>
    )
}