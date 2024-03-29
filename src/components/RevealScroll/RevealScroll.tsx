import React, { useEffect, useRef, useState } from "react";
import "./RevealScroll.css";

export default function RevealScroll() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }
      // { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref?.current!);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      ref?.current!.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref?.current!.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div className="App">
      <header>This is the Header</header>
      <main ref={ref}>
        <div className="child-one">Child One</div>
        <div className="child-two">Child Two</div>
      </main>
      <footer>This is the Footer</footer>
    </div>
  );
}
