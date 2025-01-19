import Appbar from "@/src/Appbar/Appbar";
import styles from "./page.module.css";
import About from "@/src/About/About";
import { Toolbar } from "@mui/material";
import Experience from "@/src/Experience/Experience";
import Cp from "@/src/Cp/Cp";


export default function Home() {
  return (
    <div className={styles.page}>
      <Appbar/>
      <Toolbar />
      <About/>
      <Experience/>
      <Cp/>
    </div>
  );
}
