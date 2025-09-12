import "../styles/Subscriptions.css";
import PlanSection from "./PlanSection/PlanSection";
import StartFreeTrial from "./PlanSection/StartFreeTrial";

const Subscriptions = () => {
  return (
    <section className="subscriptions">
      <PlanSection />
      <StartFreeTrial />
    </section>
  );
};

export default Subscriptions;
