import Item from "../Item/Item";

const ItemList = ({productos}) => {
  return (
    <>
      {productos.map(item => <Item key={item.id} {...item} />)}
    </>
  );
}

export default ItemList