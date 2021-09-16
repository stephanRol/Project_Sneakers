import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const getData = async (url) => {
    //   try {
    //     let res = await fetch(url);
    //     //console.log(res);

    //     if (!res.ok) {
    //       const errObj = {
    //         err: true,
    //         status: res.status,
    //         statusText: res.statusText ? res.statusText : "Ocurrio un error",
    //       };
    //       throw errObj;
    //     }

    //     let data = await res.json();
    //     console.log(data);

    //     setIsPending(false);
    //     setData(data);
    //     setError({ err: false });
    //   } catch (err) {
    //     setIsPending(true);
    //     //setData(null); Optional
    //     setError(err);
    //   }
    // };

    const getData = async (url) => {
      try {
        // fetch(url, {
        //   method: "GET",
        //   headers: {
        //     "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
        //     "x-rapidapi-key":
        //       "ea",
        //   },
        // })
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              const errObj = {
                err: true,
                status: res.status,
                statusText: res.statusText
                  ? res.statusText
                  : "Ocurrio un error",
              };
              throw errObj;
            }
            return res.json();
          })
          .then((result) => {
            setIsPending(false);
            setData(result);
            setError({ err: false });
          });
      } catch (err) {
        setIsPending(true);
        //setData(null); Optional
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
