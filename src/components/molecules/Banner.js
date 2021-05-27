// importing react-bootstrap tags
import {Row,Col,Image} from 'react-bootstrap';

// importing customized button component
import ButtonCustom from '../atoms/ButtonCustom'

// importing customized button component
import ButtonNav from '../atoms/ButtonNav'

// importing customized emblem component
import EmblemCustom from '../atoms/EmblemCustom';

// importing centered text component
import CenterText from '../molecules/CenterText';

function Banner(props) {
    return (
        <>
            <Row className="myBanner position-relative"> 
                <div id="imageBannerFrame" 
                    className={props.style1 
                        ? "myBannerStyle1 position-relative d-flex justify-content-center align-items-center p-0" 
                        : "imageBannerFrame position-relative d-flex justify-content-center align-items-center p-0"
                    }
                >       
                    <Image
                        alt=""
                        src={props.bannerImage}
                        className={props.style3 ? "myBannerStyle3 myImageBanner" : props.style1 ? "myBannerStyle1Image" : "myImageBanner" }
                    />
                    {props.style2 || props.style3 || props.style4 || props.style5 ? 
                        null
                        : <p className="position-absolute text-white text-uppercase display-2 fw-bold">{props.title}</p>     
                    }
                    {props.style1 && 
                        <div className="position-absolute bottom-0 w-100 d-flex flex-row justify-content-center">
                            <ButtonNav word={"our church"}/>
                            <ButtonNav word={"vision & mission"}/>
                            <ButtonNav word={"our pastor"}/>
                        </div>
                    }
                    {props.style2 || props.style3 ?
                        <div 
                            className={props.style2 
                                ? "myBannerCenterOverlay position-absolute top-75 w-100 text-center px-5 pb-5" 
                                : "myBannerStyle3 position-absolute top-75 w-100 text-center px-5 aa"
                            }
                        >
                            <Row className="py-5">
                                <h1 className="text-white text-uppercase display-1 fw-bold">{props.title}</h1>
                            </Row>
                            <Row className="mb-5">
                                <p className="text-white fs-4">"{props.text}"</p>
                            </Row>
                            {props.buttonPortal && 
                                <div>
                                    <ButtonCustom word={props.buttonPortal} outlineWhite={true} buttonLink={props.buttonLink && props.buttonLink} />
                                </div>
                            }
                        </div>
                        : null
                    }
                    {props.style4 || props.style5 ?
                    
                        <Col  className="position-absolute top-75 w-100 text-center">
                            {props.style5 ?
                                <> 
                                    <Row className="py-5">
                                        <h1 className="text-white text-uppercase display-1 fw-bold">{props.title}</h1>
                                    </Row>
                                    <Row className="mb-5">
                                        <p className="text-white fs-4">"{props.text}"</p>
                                    </Row>
                                    </>
                                :   <div className="myBannerStyle4 w-100 d-flex flex-column  justify-content-center align-items-center">
                                        {props.text1 &&  
                                            <div className="w-100">
                                                <CenterText word={props.text1} colorWhite={true} decreaseSpace={true}/>
                                            </div>
                                        }
                                        {props.text2 && 
                                            <div className="w-100">
                                                <CenterText word={props.text2} colorWhite={true} decreaseSpace={true}/>
                                            </div>
                                        }
                                        {props.text3 && 
                                            <div className="w-100">
                                                <CenterText word={props.text3} colorWhite={true} decreaseSpace={true}/>
                                            </div>
                                        }
                                        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                                            <div className="m-3">
                                                <ButtonCustom outlineWhite={true} word={props.button1}/>
                                            </div>
                                            <div className="m-3">
                                                <ButtonCustom outlineWhite={true} word={props.button2}/>
                                            </div>
                                        </div>
                                       
                                    </div>  
                            } 
                        </Col>
                        : null
                    }
                    {props.style4 && 
                        <EmblemCustom 
                            headEmblem={props.headEmblem && props.headEmblem} 
                            headTitle={props.headTitle && props.headTitle}
                        /> 
                    }
                    {props.style4 && 
                        <EmblemCustom 
                            tail={props.tail && props.tail}
                        /> 
                    }
                </div>
            </Row>
        </>
    )
}

export default Banner
