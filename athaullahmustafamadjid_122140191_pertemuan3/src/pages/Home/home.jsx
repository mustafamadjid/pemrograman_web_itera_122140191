import Navbar from "../../components/layout/Navbar/navbar";
import Footer from "../../components/layout/Footer/footer";
import Intro from "../../components/layout/HomeIntro/intro";
import RecommendedBooks from "../../components/layout/HomeIntro/recommendedBooks";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <RecommendedBooks />
      <Footer />
    </>
  );
};

export default Home;
