// importing react-bootstrap tag(s)
import {Container} from 'react-bootstrap';

// importing images for banner
import aboutImage from '../assets/images/about.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing images for about us content(s)
import aboutContentImage1 from '../assets/images/about-content-1.jpg'
import aboutContentImage2 from '../assets/images/about-content-2.jpg'

// importing about us content(s)
import AboutContent1 from '../components/templates/AboutContent1';
import AboutContent2 from '../components/templates/AboutContent2';

function About() {

    // inputing text for about us content(s)
    let word =  `God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission,
                 to show love and Compassion because he is a GOD of Covenant,
                 who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, 
                 made into champions by the promises of His Word.
                `
    return (
        <Container fluid>
                
            <Banner bannerImage={aboutImage} title={"ABOUT US"} />
            <AboutContent1 image={aboutContentImage1} word={word}/>
            <AboutContent2 image={aboutContentImage2} word={word}/>
                
        </Container>
    )
}

export default About
