import { useHistory, useLocation } from "react-router";

export const usePagination = (filteredValues) => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 6;
  let start = parseInt(query.get("start")) || 1;
  let end = parseInt(query.get("end")) || LIMIT;

  let history = useHistory();

  const handlePrev = (e) => {
    history.push({ search: `?start=${start - LIMIT}&end=${end - LIMIT}` });
  };
  const handleNext = (e) => {
    history.push({ search: `?start=${start + LIMIT}&end=${end + LIMIT}` });
  };
  const handleBegin = (e) => {
    history.push({ search: `?start=1&end=${LIMIT}` });
  };
  const handleFinal = (e) => {
    const final = Math.floor(filteredValues.length / LIMIT);
    const rest = filteredValues.length % LIMIT;

    if (rest !== 0) {
      history.push({
        search: `?start=${final * LIMIT + 1}&end=${final * LIMIT + LIMIT}`,
      });
    } else {
      history.push({
        search: `?start=${final * LIMIT - 2}&end=${final * LIMIT}`,
      });
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
