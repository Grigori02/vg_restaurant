
import { Inter } from "next/font/google";
import App from "@/components/layouts/App";
import BackgroundVideo from "@/components/BackgroundVideo/BackgroundVideo";
import About from "@/components/abouts/About";
import Packages from "@/components/ packages/ Packages";
import Contact from "@/components/contacts/Contact";
import Hallses from "@/components/halls/Hallses";
import Garden from "@/components/garden/Garden";
import Foods from "@/components/foods/Foods";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <App>
            <BackgroundVideo/>
            <About/>
            <Packages/>
            <Foods/>
            <Hallses/>
            <Garden/>
            <Contact/>
      </App>
    </div>
  );
}
