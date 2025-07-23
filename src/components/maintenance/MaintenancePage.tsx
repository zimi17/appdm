import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Bell, Mail, Coffee, Search } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"; // Import ScrambleTextPlugin
import { SplitText } from "gsap/SplitText";
import * as copyData from "./maintenance.json";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrambleTextPlugin, SplitText); // Register plugins

import "./MaintenancePage.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const langKeys = Object.keys(copyData);

export default function MaintenancePage() {
  const [, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [showNotificationToast, setShowNotificationToast] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // Refs for GSAP animations
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsSectionRef = useRef<HTMLElement>(null);
  const progressSectionRef = useRef<HTMLElement>(null);
  const errorNumberRef = useRef<HTMLDivElement>(null);

  const splitMainHeading = useRef<SplitText | null>(null);
  const splitDescription = useRef<SplitText | null>(null);

  useEffect(() => {
    const targetDate = new Date("2025-08-17T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // GSAP Animations
    // Initial load animation for header and main content
    gsap.from("header", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.from(".left-content > *", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.3,
    });
    gsap.from(".geometric-cross, .geometric-circle", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
      delay: 0.5,
    });

    // ScrollTrigger for cards section
    if (cardsSectionRef.current) {
      gsap.from(cardsSectionRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // ScrollTrigger for progress section
    if (progressSectionRef.current) {
      gsap.from(progressSectionRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: progressSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate progress bar fill with ScrollTrigger
      gsap.to(".progress-fill", {
        width: "65%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".progress-bar",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // DrawSVG for icons (assuming they are SVG paths)
    gsap.from(".card-icon svg path", {
      drawSVG: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".cards-section",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      clearInterval(timer);
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (splitMainHeading.current) splitMainHeading.current.revert();
      if (splitDescription.current) splitDescription.current.revert();
    };
  }, []);

  useEffect(() => {
    // Clean up previous SplitText instances
    if (splitMainHeading.current) splitMainHeading.current.revert();
    if (splitDescription.current) splitDescription.current.revert();

    const currentMainHeading = mainHeadingRef.current;
    const currentDescription = descriptionRef.current;

    document.fonts.ready.then(() => {
      if (currentMainHeading) {
        splitMainHeading.current = new SplitText(currentMainHeading, {
          type: "words,chars",
        });
        gsap.from(splitMainHeading.current.chars, {
          opacity: 0,
          y: 20,
          rotationX: -90,
          stagger: 0.02,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      if (currentDescription) {
        splitDescription.current = new SplitText(currentDescription, {
          type: "words",
        });
        gsap.from(splitDescription.current.words, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.5,
          ease: "power1.out",
          delay: 0.2,
        });
      }
    });

    const langTransitionTimer = setInterval(() => {
      setCurrentLangIndex((prevIndex) => (prevIndex + 1) % langKeys.length);
    }, 3000); // Change language every 3 seconds

    return () => {
      clearInterval(langTransitionTimer);
    };
  }, [currentLangIndex]);

  const showNotification = (message: string) => {
    setNotificationMessage(message);
    setShowNotificationToast(true);
    setTimeout(() => {
      setShowNotificationToast(false);
    }, 3000);
  };

  const animateNumber = () => {
    const number = errorNumberRef.current;
    if (number) {
      gsap.to(number, {
        scale: 1.2,
        rotation: 5,
        color: "rgba(255, 255, 255, 0.8)",
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(number, {
            scale: 1,
            rotation: 0,
            color: "white",
            duration: 0.3,
            ease: "power1.out",
          });
        },
      });
    }
  };

  const currentCopy = copyData[langKeys[currentLangIndex]];

  return (
    <div className="container">
      {/* Header */}
      <header>
        <div className="header-content">
          <a href="/" className="logo">
            {currentCopy.judul}
          </a>
          <nav className="nav-links">
            <a href="/">Beranda</a>
            <a href="/about">Tentang</a>
            <a href="/catalog">Katalog</a>
            <a href="/contact">Kontak</a>
          </nav>
          <div className="header-actions">
            <div className="header-icon">
              <Search size={20} />
            </div>
            <div className="header-icon">
              <ExternalLink size={20} />
            </div>
            <button
              className="menu-toggle"
              aria-label="Open menu"
              onClick={() =>
                showNotification(currentCopy.notification_menu_functionality)
              }
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="content-wrapper">
          <div className="left-content">
            <div
              className="error-code"
              onClick={animateNumber}
              onKeyDown={animateNumber}
              role="button"
              tabIndex={0}
              ref={errorNumberRef}
            >
              418
            </div>
            <h1 className="main-heading" ref={mainHeadingRef}>
              {currentCopy.main_heading}
            </h1>
            <div className="subtitle">{currentCopy.subtitle_system_status}</div>
            <p className="description" ref={descriptionRef}>
              {currentCopy.deskripsi}
            </p>
            <button
              type="button"
              className="cta-button"
              onClick={() =>
                showNotification(currentCopy.notification_updates_soon)
              }
            >
              {currentCopy.read_more}
            </button>
          </div>

          <div className="right-content">
            <div className="geometric-cross" />
            <div className="geometric-circle" />
          </div>
        </div>
      </main>

      {/* Interactive Cards Section */}
      <section className="cards-section" ref={cardsSectionRef}>
        <div className="cards-container">
          <div
            className="interactive-card"
            onClick={() =>
              showNotification(currentCopy.notification_social_media)
            }
            onKeyDown={() =>
              showNotification(currentCopy.notification_social_media)
            }
            role="button"
            tabIndex={0}
          >
            <div className="card-icon">
              <Bell size={24} color="white" />
            </div>
            <div className="card-title">
              {currentCopy.card_stay_updated_title}
            </div>
            <div className="card-description">
              {currentCopy.card_stay_updated_desc}
            </div>
          </div>

          <div
            className="interactive-card"
            onClick={() =>
              showNotification(currentCopy.notification_emergency_contact)
            }
            onKeyDown={() =>
              showNotification(currentCopy.notification_emergency_contact)
            }
            role="button"
            tabIndex={0}
          >
            <div className="card-icon">
              <Mail size={24} color="white" />
            </div>
            <div className="card-title">{currentCopy.card_need_help_title}</div>
            <div className="card-description">
              {currentCopy.card_need_help_desc}
            </div>
          </div>

          <div
            className="interactive-card"
            onClick={() =>
              showNotification(currentCopy.notification_brewing_status)
            }
            onKeyDown={() =>
              showNotification(currentCopy.notification_brewing_status)
            }
            role="button"
            tabIndex={0}
          >
            <div className="card-icon">
              <Coffee size={24} color="white" />
            </div>
            <div className="card-title">
              {currentCopy.card_brewing_status_title}
            </div>
            <div className="card-description">
              {currentCopy.card_brewing_status_desc}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section" ref={progressSectionRef}>
        <div className="progress-container">
          <div className="progress-info">
            <h2>{currentCopy.progress_section_title}</h2>
          </div>
          <div className="progress-details">
            <div className="progress-bar">
              <div className="progress-fill" />
            </div>
            <div className="progress-text">{currentCopy.progress_text}</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>{currentCopy.footer_about_title}</h3>
            <p>{currentCopy.footer_about_desc}</p>
          </div>
          <div className="footer-section">
            <h3>{currentCopy.footer_quick_links_title}</h3>
            <p>
              <a href="/academic-programs">
                {currentCopy.footer_academic_programs}
              </a>
            </p>
            <p>
              <a href="/student-portal">
                {currentCopy.footer_student_portal}
              </a>
            </p>
            <p>
              <a href="/faculty">{currentCopy.footer_faculty}</a>
            </p>
            <p>
              <a href="/contact">{currentCopy.footer_contact}</a>
            </p>
          </div>
          <div className="footer-section">
            <h3>{currentCopy.footer_contact_info_title}</h3>
            <p>{currentCopy.footer_address_line1}</p>
            <p>{currentCopy.footer_address_line2}</p>
            <p>{currentCopy.footer_phone}</p>
            <p>{currentCopy.footer_email}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{currentCopy.footer_copyright_bottom}</p>
        </div>
      </footer>

      {/* Notification Toast */}
      <div
        id="notification"
        className={`notification ${showNotificationToast ? "show" : ""}`}
      >
        <span id="notification-text">{notificationMessage}</span>
      </div>
    </div>
  );
}