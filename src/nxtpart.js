import pic from './assets/Group 33507.svg'
import pic1 from './assets/Group 33501.svg'
import pic2 from './assets/Group 33502.svg'
import pic3 from './assets/Group 33503.svg'
import pic4 from './assets/Group 33504.svg'
import pic5 from './assets/Group 33505.svg'
import './nxtpart.css';

function Nxt() {

    return (
        <>
        <div className="nxt">
            <div className="top-cont"><div class="browse"><h2>Browse From Top Categories</h2> </div>
            <div class="grp"><img src={pic} class="line" alt="pic"/></div></div>
            <div class="svs">  <img src={pic1} alt="pic1" />
                               <img src={pic2} alt="pic2"/>
                               <img src={pic3} alt="pic3" />
                               <img src={pic4} alt="pic4" />
                               <img src={pic5} alt="pic5" />  
            </div>
        </div>
        </>
    )

} 

export default Nxt