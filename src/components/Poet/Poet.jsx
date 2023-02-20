import axios from "axios";
import { useEffect, useState } from "react";
import {
  CategoryCard,
  CategoryCardBody,
  CategoryCardPr,
  CategoryCardsBox,
  CategoryCardTitle,
  CategoryCardTop,
  CategoryCardTopImg,
} from "./poet.style";

export const Poet = ({ id }) => {
  const [PoetData, setPoetData] = useState([]);

  const GetPoet = async () => {
    const data = await axios.get("http://localhost:5000/author/genreId/" + id);
    if (data.status === 201) {
      localStorage.setItem("poet", JSON.stringify(data.data));
      setPoetData(data.data);
    }
  };

  useEffect(() => {
    GetPoet();
  }, []);

  return (
    <>
      {PoetData.length ? (
        <>
          {PoetData.map((poet) => {
            return (
              <CategoryCard to={`/about${poet.id}`} key={poet.id}>
                <CategoryCardTop>
                  <CategoryCardTopImg
                    src={"http://localhost:5000/" + poet.image}
                    alt="catd-img"
                  />
                </CategoryCardTop>
                <CategoryCardBody>
                  <CategoryCardTitle>
                    {poet.first_name + " " + poet.last_name}{" "}
                  </CategoryCardTitle>
                  <CategoryCardPr>
                    {poet.date_of_birth + "-" + poet.date_of_death}{" "}
                  </CategoryCardPr>
                </CategoryCardBody>
              </CategoryCard>
            );
          })}
        </>
      ) : (
        "Shoirlar yo'q "
      )}
    </>
  );
};
