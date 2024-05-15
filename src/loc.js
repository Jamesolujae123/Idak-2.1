import pic from './assets/Group 33507.svg'
import loc1 from './assets/Rectangle 2187.png'
import loc2 from './assets/Rectangle 2188.png'
import loc3 from './assets/Rectangle 2193.png'
import loc4 from './assets/Rectangle 2190.png'
import loc5 from './assets/Rectangle 2191.png'
import loc6 from './assets/Rectangle 2192.png'
import './loc.css'


function Loc () {
    return (
        <>
         <div className="nxt-3"> <div className="locations">
     
         <div className="top-cont-2"><div class="browse"><h2 className='h2'>Featured Locations</h2> </div>
            <div class="grp-2"><img src={pic} class="line" alt="pic"/></div></div></div>

            <div className='loc-cont'>
                <div className='left'><img className='loc-left' src={loc1}  alt="loc1"/></div>
                <div  className='middle'><div className='mid-1'><img className='loc-mid-1' src={loc2}  alt="loc2"/>
                                         <img className='loc-mid-2' src={loc3}  alt="loc3"/></div>
                                         <div className='mid-2'><img className='loc-mid-3' src={loc4}  alt="loc4"/>
                                         <img className='loc-mid-4' src={loc5}  alt="loc5"/></div> </div>
                <div className='right'><img className='loc-right' src={loc6}  alt="loc6"/></div>
                 </div>

                 <div className='loc-cont-r'>
                    <div className='locat'><img className='locatimg' src={loc1} alt="loc1" /><span className='loc-name'>Kandy</span></div>
                    <div className='locat'><img className='locatimg' src={loc2} alt="loc2" /></div> 
                    <div className='locat'><img className='locatimg' src={loc3} alt="loc3" /></div> 
                    <div className='locat'><img className='locatimg' src={loc4} alt="loc4" /></div> 
                    <div className='locat'><img className='locatimg' src={loc5} alt="loc5" /></div> 
                    <div className='locat'><img className='locatimg' src={loc6} alt="loc6" /></div> 
                 </div>
         </div>
        </>
    )
}

export default Loc