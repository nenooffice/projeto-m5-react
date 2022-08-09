import * as Styled from "./style"
import { SettingsProps } from "../../interfaces";
import Menu from "../../components/Menu";
import { MarketIcon, PromotionIcon } from "../../assets/icons";
import { mockedProducts } from "../../mocks";
import SettingsProductCard from "../../components/SettingsProductCard";
import Button from "../../components/Button";

const Settings = ({ setLogged }: SettingsProps) => {
  return (
    <Styled.SettingsContainer>
      <Menu path="settings" setLogged={setLogged} />
      <Styled.SettingsNavigationContainer>
        <h2>Config</h2>
        <Styled.SettingsNavigationButtonsList>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <MarketIcon />
              <h2>Change your tables</h2>
              <p>Add new tables or change their names</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer active>
            <Styled.SettingsNavigationButtonSelected active>
              <PromotionIcon />
              <h2>Manage Products</h2>
              <p>Change products, prices and more</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <PromotionIcon />
              <h2>Manage Categories</h2>
              <p> Add new categories and edit then</p>
            </Styled.SettingsNavigationButtonSelected>
            </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <PromotionIcon />
              <h2>Manage Users</h2>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.EntitiesEditContainer>
            <h2>Manage Products</h2>
            <Styled.EntitiesEditCategoriesSelector className="entities-edit-categories-selector">
              <Styled.EntitiesEditCategoriesButton active>
                Burgers
              </Styled.EntitiesEditCategoriesButton>
              <Styled.EntitiesEditCategoriesButton active>
                Portions
              </Styled.EntitiesEditCategoriesButton>
              <Styled.EntitiesEditCategoriesButton active>
                Drinks
              </Styled.EntitiesEditCategoriesButton>
            </Styled.EntitiesEditCategoriesSelector>
            <Styled.EntitiesEditList>
              <Styled.AddEntityCard>
                <h3>+</h3>
              </Styled.AddEntityCard>
              {mockedProducts.map((element) => (
                <SettingsProductCard product={element} key={element.id} />
              ))}
            </Styled.EntitiesEditList>
            <Styled.ConfirmationContainer>
              <Button text="Cancel" variant="cancel" />
              <Button text="Save changes" />
            </Styled.ConfirmationContainer>
          </Styled.EntitiesEditContainer>
        </Styled.SettingsNavigationButtonsList>
      </Styled.SettingsNavigationContainer>
    </Styled.SettingsContainer>
  );
};

export default Settings;