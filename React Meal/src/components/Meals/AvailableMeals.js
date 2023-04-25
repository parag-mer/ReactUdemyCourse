import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg Chesse Burger",
    description: "Fresh veggies with lots of chesse.....",
    price: 60,
  },
  {
    id: "m2",
    name: "French Fries",
    description: "fresh and crispy",
    price: 50,
  },
  {
    id: "m3",
    name: "Red Chilli chessey Macroni Pasta",
    description: "Red chilli with your Fav Chesse.....",
    price: 90,
  },
  {
    id: "m4",
    name: "7-chesse pizza",
    description: "Chesse....chesse....chesse....",
    price: 120,
  },
];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((m) => {
    return (
      <MealItem
        key={m.id} 
        id = {m.id}
        name={m.name}
        description={m.description}
        price={m.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
