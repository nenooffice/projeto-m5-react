import { ProductsListProps } from "../../interfaces";
import ProductCard from "../ProductCard";
import * as Styled from "./styles";

const ProductsList = ({ list }: ProductsListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element) => (
        <ProductCard product={element} key={element.id} />
      ))}
    </Styled.ProductsListContainer>
  );
};

export default ProductsList;
