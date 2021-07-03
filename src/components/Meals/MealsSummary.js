import classes from './MealsSummary.module.css'

const MealsSummary = props => {
  return (
    <section className={classes.summary}>
      <h2>Lezzetli yemekler, senin icin</h2>
      <p>
        Favori yemegini sec aksiyon baslasin
      </p>
      <p>Boyle yemegi hic bir yerde bulamazsin</p>
    </section>
  );
}

export default MealsSummary;