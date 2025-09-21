import Appbar from "@/src/Appbar/Appbar";
import styles from "./page.module.css";
import About from "@/src/About/About";
import { Toolbar } from "@mui/material";
import Experience from "@/src/Experience/Experience";
import Cp from "@/src/Cp/Cp";
import Footer from "@/src/Footer/Footer";
import Activities from "@/src/Activities/Activities";

export default function Home() {
  return (
    <div className={styles.page}>
      <Appbar/>
      <Toolbar />
      <div id="about">
        <About/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <div id="cp">
        <Cp/>
      </div>
      <div id="activities">
        <Activities/>
      </div>
      <Footer />
    </div>
  );
}
