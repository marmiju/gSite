import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import PriceTable from "./components/pricesTable/PriceTable";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero/>
        <PriceTable/>
        <Portfolio/>
      </main>
      
    </div>
  );
}
