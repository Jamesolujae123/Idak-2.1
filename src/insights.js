import ratings from './assets/Group 33522.svg'
import listings from './assets/Group 33523.svg'
import articles from './assets/Group 33524.svg'
import './insights.css'

function Insight() {

    return (
<>
<div className="insighting">
<div classname="int"> <span className='insight-tin'>Insights and Performance Metrics</span>
  </div>
<div className='sec-comp'><div className='rate'><img classname="blk" src={ratings} /></div>  
<div className='rate'><img classname="blk" src={listings} /></div>
<div className='rate'><img classname="blk" src={articles} /></div>
</div>

</div>


</>
)

}

export default Insight