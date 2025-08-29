const MonthlyPlan = () => {
  return (
    <div className="cardsContainer">
      <div className="monthlyPlanCard">
        <h2 className="planCategory">Basic Plan</h2>
        <p className="planDescription">
          Enjoy an extensive library of movies and shows, featuring a range of
          content, including recently released titles.
        </p>
        <p className="planPrice">
          <span>$9.99</span> /monthly
        </p>
        <div className="buttons">
          <button className="startTrial">Start Free Trial</button>
          <button className="choosePlan">Choose Plan</button>
        </div>
      </div>

      <div className="monthlyPlanCard">
        <h2 className="planCategory">Standard Plan</h2>
        <p className="planDescription">
          Access to a wider selection of movies and shows, including most new
          releases and exclusive content
        </p>
        <p className="planPrice">
          <span>$12.99</span> /monthly
        </p>
        <div className="buttons">
          <button className="startTrial">Start Free Trial</button>
          <button className="choosePlan">Choose Plan</button>
        </div>
      </div>

      <div className="monthlyPlanCard">
        <h2 className="planCategory">Premium Plan</h2>
        <p className="planDescription">
          Access to a widest selection of movies and shows, including all new
          releases and Offline Viewing
        </p>
        <p className="planPrice">
          <span>$14.99</span> /monthly
        </p>
        <div className="buttons">
          <button className="startTrial">Start Free Trial</button>
          <button className="choosePlan">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPlan;
