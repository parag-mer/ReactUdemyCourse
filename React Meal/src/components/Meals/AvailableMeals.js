import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

export default function AvailableMeals() {

  const [meals , setMeals] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [httpError , setHttpError] = useState();

  useEffect(()=>{
    
    const fetchmeals = async () => {
      const response = await fetch('https://rx-udemy-default-rtdb.firebaseio.com/meals.json');

      if(!response.ok)
      {
        throw new Error('something went wrong');
      }

      const data = await response.json();

      const loadedmeals = [];
      for(const key in data)
      {
        loadedmeals.push({
          id : key,
          name : data[key].name,
          description : data[key].description,
          price : data[key].price 
        });
      }
      setMeals(loadedmeals);
      setIsLoading(false);
    };

    fetchmeals().catch((error)=>{
      setIsLoading(false);
      setHttpError(error.message);    
    });    
  },[]);

  if(isLoading)
  {
    return(
      <div style={{textAlign : 'center' , position : 'relative'}}>
        <div className={classes.loader}></div>
      </div>
      
    );
  }

  if(httpError)
  {
    return(
    <section className={classes.error}>
      <p>{httpError}</p>
    </section>);
  }

  const mealsList = meals.map((m) => {
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
