// importing use state
import {useState,useEffect} from 'react';

// importing react redux library
import {useDispatch} from 'react-redux';

// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing images for banner
import icareImage from '../assets/images/icare.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing template for centering text component
import CenterText from '../components/molecules/CenterText';

// importing event component
import Event from '../components/templates/Event';

// importing icare leader profile component
import IcareLeaderProfile from '../components/templates/IcareLeaderProfile';

// importing leader image
import youthLeader from '../assets/images/youthLeader.jpg';
import manLeader from '../assets/images/manLeader.jpg';
import womanLeader from '../assets/images/womanLeader.jpg';

import {getIcareAction} from "../redux/actions/icare.actions";


function Icare() {

    const dispatch = useDispatch();
    // Store data from dispatch into state
    const [FormEdit, setFormEdit] = useState([]);

    // inputing text
    let wordCenter = ` God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission,
    to show love and Compassion because he is a GOD of Covenant,
    who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, 
    made into champions by the promises of His Word.`;

    // inputing title for banner caption
    let bannerTitle = 'Icare';

    // inputing text for banner caption
    let bannerText = 'ICare helps you to grow spiritually, and that requires more than meeting at Sunday services.';

    // declaring state for hovering event
    const [leader, setLeader] = useState(null);

    // Function for selecting first leader
    if(FormEdit.length>0 && leader == null){
        setLeader(FormEdit[0])
    }

    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getIcareAction(setFormEdit))
    }, [dispatch])

    return (
        <Container fluid>

            <Banner bannerImage={icareImage} title={bannerTitle} text={bannerText} style3={true}/>
            <CenterText word={wordCenter}/>
            <Event data={FormEdit} icare={true} setLeader={setLeader}/>
            {leader && <IcareLeaderProfile data={leader}/>}
            
        </Container>
    )
}

export default Icare
