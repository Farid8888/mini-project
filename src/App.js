import MidlleBall from "./components/Balls/MidlleBall/MidlleBall";
import Layout from "./components/Layout/Layout";
import BigBall from "./components/Balls/BigBall/BigBall";
import Body from "./components/Body/Body";
import SmallBall from "./components/Balls/SmallBall.js/SmallBall";
import Purple from "./components/Effects/Purple";
import Blue from "./components/Effects/Blue";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Layout>
      <MidlleBall />
      <BigBall />
      <SmallBall />
      <Body />
      <Purple />
      <Blue />
      <Footer />
    </Layout>
  );
};

export default App;
