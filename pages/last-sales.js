import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage(props) {
  const [sales, setSales] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    'https://nextjs-course-code-b9589-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
    fetcher
  );


  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     'https://nextjs-course-code-b9589-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = [];

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => {
        return (
          <li key={sale.id}>
            {sale.username} 👉🏻 {sale.volume}
          </li>
        );
      })}
    </ul>
  );
}

export default LastSalesPage;
