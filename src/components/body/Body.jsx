// import ButtonAdd from './ButtonAdd';
import Json from '../../data/Json.jsx';
import './Body.css';
// import ButtonAdd from './ButtonAdd.jsx';

function Body() {

  const cards = Json

  return (
    <div className="containerbody">
    <div className="ContainerCards">
      <div className="Cards">
        {cards.map(product => (
          <div className= "Box" key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.bandName}</h3>
            <h3>{product.albumName}</h3>
            <p>{product.price}</p>
            {/* <ButtonAdd /> */}
          </div>
        

        ))}
      </div>

    </div>
    </div>

  );
}

export default Body;