import { useEffect } from "react";
import SectionOne from "../components/about/sectionOne";

export default function AboutUs(params) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return(
        <div className="">
            <SectionOne/>
        </div>
    )
}