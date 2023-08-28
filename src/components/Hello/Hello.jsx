import './hello-style.scss'

import img from "../../assets/img/content/hello/hello-img.png"

const Hello = (props) => {
    return ( 
        <section className='hello' ref={props.helloRef}>
            <div className='hello__wrapper container__section'>
            <h2 className='hello__wrapper-title'>Hi, i'm <span>Myroslav</span><br/>I am a Front-end developer<br/>from Ukraine</h2>
            <img className='hello__wrapper-img' src={img} alt="" />
            </div>
        </section>
     );
}
 
export default Hello;