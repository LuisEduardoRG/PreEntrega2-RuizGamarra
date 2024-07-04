import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";
const ItemDetail = ({ item, onAdd }) => {
  return (
    <>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt="" />
          </div>

          <div className={"containerDetail"}>
            <h2 >
              <span className="nombre-product">Nombre:</span> {item.title}
            </h2>
            <h4>
              <span className="descripcion-product">Descripcion:</span>{" "}
              {item.description}
            </h4>
            <h2>
              <span className="precio-product">Precio:</span> {item.price}.-
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
