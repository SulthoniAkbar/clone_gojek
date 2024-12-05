import Header from "@/components/header";
import IntroduceSection from "@/components/intro";
import JoinSection from "@/components/joinapp";
import Navbar from "@/components/navbar";
import ReviewSection from "@/components/review";
import ScaleSection from "@/components/scale";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <JoinSection />
        <IntroduceSection />
        <ScaleSection />
        <ReviewSection />
      </main>
    </>
  );
};

export default Home;
