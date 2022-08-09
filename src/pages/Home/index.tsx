import { useState } from "react"
import { Category, HomeProps, Product } from "../../interfaces"
import { mockedCategories, mockedProducts } from "../../mocks"
import { DateTime } from "luxon";
import * as Styled from "./style"
import Menu from "../../components/Menu";
import { SearchIcon } from "../../assets/icons";
import ProductsList from "../../components/ProductsList";
import OrderDetails from "../../components/OrderDetails";

const Home = ({ setLogged }: HomeProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category> (
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducts.filter(
    (element) => element.categoryId === selectedCategory.id
  );

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home" setLogged={setLogged} />
      <Styled.HomeContentContainer>
        <Styled.TitleContainer>
          <h1>Project Burger</h1>
          <p>{formatedDate}</p>
        </Styled.TitleContainer>
        <Styled.SearchInputContainer>
          <SearchIcon />
          <input placeholder="Search your Burger" />
        </Styled.SearchInputContainer>
        <section>
          <Styled.CategoriesNavigationBar>
            {mockedCategories.map((element)=> {
              return (
                <Styled.CategoriesNavigationButton 
                active={element.name === selectedCategory.name}
                onClick={() => setSelectedCategory(element)}
                >
                  {element.name}
                </Styled.CategoriesNavigationButton>
              );
            })}
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h3>Choose your Burger</h3>
            <Styled.TableSelect defaultValue="">
              <option value="" disabled>
                Select your Table
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Styled.TableSelect>
          </Styled.ProductsHeaderContainer>
          <ProductsList list={filteredProducts} />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;