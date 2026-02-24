import ChefSpecial from "./chef-special"
import HeroSection from "./hero-section"
import PopularCategory from "./popular-category"

const Home = () => {
  return (
    <section className="min-h-screen bg-white">
      <HeroSection />
      <PopularCategory />
      <ChefSpecial />
    </section>
  )
}

export default Home