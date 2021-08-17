import React, { useEffect } from "react";

const CounterUpStats = ({ counterHeight }) => {
  const count = () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  useEffect(() => {
    if (counterHeight) count();
    return () => {};
  }, [counterHeight]);

  return (
    <>
      <div className="about-stats-counters">
        <div className="stats">
          <div className="stat">
            <i className="fas fa-shoe-prints"></i>
            <div className="container">
              <div className="counter" data-target="1000">
                0
              </div>
              <span>+</span>
            </div>
            <h3>Sneakers</h3>
          </div>
          <div className="stat">
            <i className="fas fa-check"></i>
            <div className="container">
              <div className="counter" data-target="10">
                0
              </div>
              <span>+</span>
            </div>
            <h3>Brands</h3>
          </div>
          <div className="stat">
            <i className="far fa-smile"></i>
            <div className="container">
              <div className="counter" data-target="9000">
                0
              </div>
              <span>+</span>
            </div>
            <h3>Happy Clients</h3>
          </div>
          <div className="stat">
            <i className="fas fa-eye"></i>
            <div className="container">
              <div className="counter" data-target="20000">
                0
              </div>
              <span>+</span>
            </div>
            <h3>Views</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterUpStats;
