import ChefSpecial from "./chef-special"
import Discover from "./discover"
import HeroSection from "../../../components/reusables/hero-section"
import PopularCategory from "./popular-category"

const Home = () => {
  return (
    <section className="min-h-screen bg-white">
      <HeroSection  heroText="The Heart of Nigerian Home Cooking" subText="Handcrafted with passion, delivered with care." variant="default" imgSrc="/images/hero-image.png" imagAlt="An overhead spread of authentic Nigerian dishes — jollof rice, egusi, plantain and more — shared at a table" />
      <PopularCategory />
      <ChefSpecial />
      <Discover />
    </section>
  )
}

export default Home