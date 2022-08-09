import * as P from "../interfaces"
import burgerX from "../assets/images/burger-x.png";
import burgerBeefChicken from "../assets/images/burguer-carne-e-frango.png";
import burgerBaconCoupleCheddar from "../assets/images/burguer-duplo-bacon-cheddar.png";
import burgerBaconDouble from "../assets/images/burguer-duplo-bacon.png";
import burgerDoubleRanch from "../assets/images/burguer-duplo-ranch.png";
import burgerSaladCheese from "../assets/images/burguer-salada-queijo.png";
import burgerSalad from "../assets/images/burguer-salada.png";
import pFries from "../assets/images/batata-frita-p.png";
import gFries from "../assets/images/batata-frita-g.png";
import bottleWater from "../assets/images/agua.png";
import CocaCola350ml from "../assets/images/coca-lata.png";
import CocaCola600ml from "../assets/images/coca-garrafa.png";

export const mockedProducts: P.Product[] = [
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "X-Burger",
    description:" Beef Burguer with incredible 180g of Angus meat!",
    price: 21.99,
    image: burgerX,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5d0d1555-e9b9-436f-b5d5-ec7fd9c78a92",
    name: "Chicken and Beef Burger",
    description:" A Burguer that brings to world a delicious Chicken and Beef combo!",
    price: 22.99,
    image: burgerBeefChicken,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "Cheddar and Bacon Marriage",
    description:" The perfect union between Cheddar and Bacon!",
    price: 23.99,
    image: burgerBaconCoupleCheddar,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "A Coup of Bacon",
    description:" Beware the Bacon Invasion!",
    price: 20.99,
    image: burgerBaconDouble,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "The Ranch",
    description:" Everyone of us need a place to rest before enjoy our daily battle. Here's our favorite place!",
    price: 24.99,
    image: burgerDoubleRanch,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "Brazilian Burger",
    description:" The world says, who we are to disagree? Brazil make every food better!",
    price: 20.99,
    image: burgerSaladCheese,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "Green Burger",
    description:" For the ones who appreciates some green color!",
    price: 19.99,
    image: burgerSalad,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "Personal Fries",
    description:" Satisfries your need for... fries",
    price: 9.99,
    image: pFries,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "Party Fries",
    description:"Prepare your party for everything with this combo of marvelous fries!",
    price: 18.99,
    image: gFries,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "Water",
    description:"Just a glass of water, nothing more.",
    price: 5.99,
    image: bottleWater,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "Coke 350ml",
    description:"350ml of sugar, caffeine and energy!",
    price: 6.99,
    image: CocaCola350ml,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "Coke 600ml",
    description:"ThirstKiller.",
    price: 8.99,
    image: CocaCola600ml,
    categoryId: "0d2fe890-258b-4215-b6d8-fae669548c54",
    createdAt: new Date(),
    updatedAt: new Date(),
  } 
]
  