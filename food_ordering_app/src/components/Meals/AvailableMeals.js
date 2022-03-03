import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Veg Thali',
    description: '2 Types of sauteed vegetables  + Dal Fry + Jeera Rice/Masala Rice + 5 rotis + sweet + pickle + papad + salad',
    price: 245,
  },
  {
    id: 'm2',
    name: 'Chicken Thali',
    description: 'Chicken Masala + Chicken Dry + Chicken Fry + Rice + Wade ( 2 Pcs )',
    price: 325,
  },
  {
    id: 'm3',
    name: 'Prawns Thali',
    description: 'Prawns Masala + Prawns Fry + Fish Tikle ( Gravy) + Rice + Bhakri ( 1 Pc )',
    price: 375,
  },
  {
    id: 'm4',
    name: 'Mutton Thali',
    description: 'Mutton Masala + Mutton Dry + Mutton Kheema + Rice + Wade ( 2 Pcs )',
    price: 400,
  },
  {
    id: 'm5',
    name: 'Surmai Thali',
    description: 'Surmai Tikle + Fish Rassa + Jawla + Chatni + Rice + 2 chapati',
    price: 490,
  },
  {
    id: 'm6',
    name: 'Pomfret Thali',
    description: 'Pomfret Tikle + Fish Rassa + Jawla + Chatni + Rice + 2 chapati',
    price: 565,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
