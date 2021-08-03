import Image from "next/image";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="Profile Image"
          width={300}
          height={300}
        />
      </div>
      <h1>I'm Max</h1>
      <p>I blog about web development - especially Angular and React.</p>
    </section>
  );
}

export default Hero;
