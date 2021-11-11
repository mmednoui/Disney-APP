import styled from "styled-components";
import SliderOfImage from "./SliderOfImage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movieSlice";
import { selectUserName } from "../features/userSlice";
import Categories from "./Categories";
import Recommended from "./Recommended";
import New from "./New";
import Original from "./Original";
import Trend from "./Trend";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommended: recommends,
          new: newDisneys,
          original: originals,
          trend: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <SliderOfImage />
      <Categories />
      <Recommended />
      <New />
      <Original />
      <Trend />
    </Container>
  );
}

export default Home;
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/assets/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
