import HeroSection from '@/components/hero';
import NavBar from '@/components/navbar';
const Home = () => {
 return (
  <>
   <div className="bg-white flex flex-col min-h-screen justify-between py-10 ">
    <NavBar />
    <HeroSection
     title="Share Confidential Messages with Ease
          and Receive 🙈 Anonymous Feedback"
     subtitle="Generate Private Message Links on WhatsApp, Facebook, Twitter, or Instagram for your friends, colleagues, and followers. Embrace the mystery of never knowing who reached out !"
     btnActionText="Get Started"
    />
   </div>
  </>
 );
};

export default Home;
