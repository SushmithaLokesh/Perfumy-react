import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

// Component Image
function Image()
{
  return(<div className="container-img">
    <div className="box">
      <img src={one} alt="One"></img>
      <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
    </div>
    <div className="box">
      <img src={two} alt="Two"></img>
      <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
    </div>
    <div className="box">
      <img src={three} alt="Three"></img>
      <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
    </div>
  </div>)
}

export default Image