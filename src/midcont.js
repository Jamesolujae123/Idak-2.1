import loc from './assets/Frame 33616.svg'
import search2 from './assets/Group 33494.svg'
import './midcont.css'


function Midcont () {

return( <><div className="container">
    <div className="main-text"> <h2>Discover your <b>Perfect Rental</b> </h2>
     <p>Rent Cars,  Houses and Items in Just a Few Clicks</p> 
    </div>
    <div className="buttons"><button className="btn-p">Places</button> <button className="btn">Rides</button> <button className="btn">Things</button></div>
    
    <div className="search">
    <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" class="sch" placeholder="search for cars, houses and more.."></input>
   <div className="sec-comp"><img src={loc} className="loc" alt="loc" /> 
    <img src={search2} className="sech" alt="sech" /></div>
    
       </div>

       <div className='resize-cont'>
        <div className='search-r'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search"  placeholder="search for cars, houses and more.."></input>
        </div>
        <div className='loc-r'><div className='sel'><i class="fa-solid fa-location-dot"></i><span>select location</span></div><i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className='search-btn-r'><button className='l'><span><i class="fa-solid fa-magnifying-glass"></i>Search Now </span></button></div>
    </div>

    </div>
    
    

    </>
)

}

export default Midcont



