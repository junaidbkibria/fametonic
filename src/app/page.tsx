"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pointers = [
    {
      id: 1,
      text: "Start growing your influence right away—no waiting required!",
    },
    {
      id: 2,
      text: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    { id: 3, text: "Use a Personal AI Worker to boost your content" },
    {
      id: 4,
      text: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];

  return (
    <div className={styles.mainLayout}>
      <div className={styles.offer}>
        <p>
          🚀 <span className={styles.offerBold}>FRESH BEGINNINGS SALE:</span>{" "}
          Extra 25% OFF, Limited Spots - start your journey today!
        </p>
      </div>
      <div className={styles.navbar}>
        <div className={styles.emptyDiv}></div>
        <div className={styles.logoWrapper}>
          <Image
            src="/Group.svg"
            alt="Logo"
            fill
            priority
            sizes="(max-width: 768px) 105.38px, (min-width: 769px) 173px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.navlinks}>
          <Link href="#about">About Us</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className={styles.menuToggle}>
          <Image
            src="/Hamburger.svg"
            alt="Menu Toggle"
            width={20}
            height={12}
            priority
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.writings}>
          <p className={styles.title}>
            {screenWidth >= 1000 ? (
              <>
                Want to Turn Social Media Into a <br /> Profitable Career?
              </>
            ) : (
              <>
                Want to Turn Social Media <br /> Into a Profitable Career?
              </>
            )}
          </p>
          <p className={styles.subtitle}>
            Discover your way to success <br />
            with Fametonic:
          </p>
          <div className={styles.pointers}>
            {pointers.map((item) => (
              <p key={item.id} className={styles.points}>
                <span className={styles.bullet}>✨</span> {item.text}
              </p>
            ))}
          </div>
          <div className={styles.startAndTermsContainer}>
            <div className={styles.getStartedContainer}>
              <button className={styles.getStartedBtn}>
                GET STARTED <img src="/RightArrow.svg" />
              </button>
              <p className={styles.instruction}>
                1-minute quiz for personalized Insights
              </p>
            </div>
            <div className={styles.termsContainer}>
              <p className={styles.policy}>
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p className={styles.rights}>
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/Mobile.svg"
            alt="Mobile logo"
            className={styles.imageInner}
          />
        </div>
      </div>
    </div>
  );
}
