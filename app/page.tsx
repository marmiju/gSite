import Image from "next/image";
import Hero from "./components/hero/Hero";
import PriceTable from "./components/pricesTable/PriceTable";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero/>
        <PriceTable/>
        
      </main>
      
    </div>
  );
}
