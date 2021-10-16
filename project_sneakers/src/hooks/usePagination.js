import { useHistory, useLocation } from "react-router";

export const usePagination = (filteredValues) => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 6;
  let start = parseInt(query.get("start")) || 1;
  let end = parseInt(query.get("end")) || LIMIT;

  let history = useHistory();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handlePrev = (e) => {
    history.push({ search: `?start=${start - LIMIT}&end=${end - LIMIT}` });
    scrollUp();
  };
  const handleNext = (e) => {
    history.push({ search: `?start=${start + LIMIT}&end=${end + LIMIT}` });
    scrollUp();
  };
  const handleBegin = (e) => {
    history.push({ search: `?start=1&end=${LIMIT}` });
    scrollUp();
  };
  const handleFinal = (e) => {
    const final = Math.floor(filteredValues.length / LIMIT);
    const rest = filteredValues.length % LIMIT;

    if (rest !== 0) {
      history.push({
        search: `?start=${final * LIMIT + 1}&end=${final * LIMIT + LIMIT}`,
      });
      scrollUp();
    } else {
      history.push({
        search: `?start=${final * LIMIT - 2}&end=${final * LIMIT}`,
      });
      scrollUp();
    }
  };

  return {
    start,
    end,
    LIMIT,
    handlePrev,
    handleNext,
    handleBegin,
    handleFinal,
  };
};
