"use client";

import React, { useState, useRef, TouchEvent, useEffect } from 'react';
import styles from './Activities.module.css';
import { 
  CardMedia, 
  Typography, 
  IconButton,
  Paper,
  Fade
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Define the activity interface
interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  images: string[];  // Changed from single imageUrl to array of images
}

// Sample activities data - you can add more as needed
const activities: Activity[] = [
  {
    id: 1,
    title: "Patent Experience Sharing Session at SRBD",
    date: "April 15, 2025",
    description: "Conducted a session on patent experience sharing in front of all engineers at SRBD, specifically sharing my A1 patent journey experience. Demonstrated the complete process from ideation to patent filing, including best practices for intellectual property protection and strategies for successful patent applications.",
    images: ["/pro.jpg", "/pro2.jpg"], // Multiple images for the activity
  },
  {
    id: 2,
    title: "Business Trip to Oxford, UK",
    date: "March 2025",
    description: "Visited Oxford Semantic Technologies, UK for project planning and technical discussions. Met with the team to align on project goals and timelines.",
    images: [
      "/20A92FD5-7473-4FD2-A8CE-004FE067586C_1_105_c.jpeg",
      "/1A6CE931-16B7-41D3-A3C1-AFADEDF8AFB2_1_105_c.jpeg",
      "/B4D924D6-EEB0-45F6-AF6B-19A734447A16_1_105_c.jpeg",
      "/EFC7FFC2-070E-4216-A20F-2B06964BD2CB_1_105_c.jpeg",
      "/504BCFC9-DD02-4356-91F3-EF559681764F_1_105_c.jpeg",
      "/9EB286FC-0E0A-40A3-8B00-F81F8796ABED_1_105_c.jpeg",
      "/7ACE9258-40E5-4028-98B1-1BC26B249DC5_1_105_c.jpeg"
    ],
  },
  {
    id: 3,
    title: "Exploring London: A Glimpse of the City",
    date: "March 2025",
    description: "Took some time to explore the vibrant city of London during my UK visit. Experienced the rich history, iconic landmarks, and diverse culture of one of the world's most dynamic cities.",
    images: [
      "/ABD7AB55-E7C5-4D06-B121-2537BF0D4257_1_105_c.jpeg",
      "/FC5FCC41-9A9C-4DF6-A988-36346F34A385_1_105_c.jpeg",
      "/55ADC44D-7C2D-41B6-8D13-D20DDBF79AE4_1_102_o.jpeg"
    ],
  },
  // Add more activities as needed
];

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);
  const [imageFadeIn, setImageFadeIn] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50; // Minimum distance for a swipe to be registered
  const imageTouchStartX = useRef<number | null>(null);
  const imageTouchEndX = useRef<number | null>(null);
  const autoRotateTimer = useRef<NodeJS.Timeout | null>(null);

  // Add useEffect for automatic image rotation
  useEffect(() => {
    // Clear any existing timer when component unmounts or dependencies change
    return () => {
      if (autoRotateTimer.current) {
        clearInterval(autoRotateTimer.current);
      }
    };
  }, []);

  // Add useEffect to handle automatic image rotation
  useEffect(() => {
    // Clear any existing timer
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }

    // Set up new timer for automatic rotation
    autoRotateTimer.current = setInterval(() => {
      const currentActivity = activities[currentIndex];
      setImageFadeIn(false);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === currentActivity.images.length - 1 ? 0 : prevIndex + 1
        );
        setImageFadeIn(true);
      }, 300); // Half of the fade duration
    }, 5000); // 5 seconds interval

    // Clean up timer on unmount or when dependencies change
    return () => {
      if (autoRotateTimer.current) {
        clearInterval(autoRotateTimer.current);
      }
    };
  }, [currentIndex]); // Re-run when currentIndex changes

  const handlePrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Animate the slide
    setSlidePosition(100);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? activities.length - 1 : prevIndex - 1
      );
      setCurrentImageIndex(0); // Reset image index when changing activity
      setSlidePosition(0);
      setIsAnimating(false);
    }, 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Animate the slide
    setSlidePosition(-100);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === activities.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentImageIndex(0); // Reset image index when changing activity
      setSlidePosition(0);
      setIsAnimating(false);
    }, 600);
  };

  const handleImageNext = () => {
    // Reset the auto-rotation timer when manually changing images
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
    
    // Trigger fade out animation
    setImageFadeIn(false);
    
    // Wait for fade out to complete before changing image
    setTimeout(() => {
      const currentActivity = activities[currentIndex];
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentActivity.images.length - 1 ? 0 : prevIndex + 1
      );
      
      // Trigger fade in animation
      setImageFadeIn(true);
      
      // Restart the auto-rotation timer
      autoRotateTimer.current = setInterval(() => {
        const currentActivity = activities[currentIndex];
        setImageFadeIn(false);
        
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => 
            prevIndex === currentActivity.images.length - 1 ? 0 : prevIndex + 1
          );
          setImageFadeIn(true);
        }, 300); // Half of the fade duration
      }, 5000);
    }, 300); // Half of the fade duration
  };

  const handleImagePrevious = () => {
    // Reset the auto-rotation timer when manually changing images
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
    
    // Trigger fade out animation
    setImageFadeIn(false);
    
    // Wait for fade out to complete before changing image
    setTimeout(() => {
      const currentActivity = activities[currentIndex];
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? currentActivity.images.length - 1 : prevIndex - 1
      );
      
      // Trigger fade in animation
      setImageFadeIn(true);
      
      // Restart the auto-rotation timer
      autoRotateTimer.current = setInterval(() => {
        const currentActivity = activities[currentIndex];
        setImageFadeIn(false);
        
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => 
            prevIndex === currentActivity.images.length - 1 ? 0 : prevIndex + 1
          );
          setImageFadeIn(true);
        }, 300); // Half of the fade duration
      }, 5000);
    }, 300); // Half of the fade duration
  };

  const handleIndicatorClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    
    // Animate the slide
    setSlidePosition(index > currentIndex ? -100 : 100);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setCurrentImageIndex(0); // Reset image index when changing activity
      setSlidePosition(0);
      setIsAnimating(false);
    }, 600);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
    
    // Reset touch values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleImageTouchStart = (e: TouchEvent) => {
    imageTouchStartX.current = e.touches[0].clientX;
    imageTouchEndX.current = null;
  };

  const handleImageTouchMove = (e: TouchEvent) => {
    imageTouchEndX.current = e.touches[0].clientX;
  };

  const handleImageTouchEnd = () => {
    if (!imageTouchStartX.current || !imageTouchEndX.current) return;
    
    const distance = imageTouchStartX.current - imageTouchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleImageNext();
    } else if (isRightSwipe) {
      handleImagePrevious();
    }
    
    // Reset touch values
    imageTouchStartX.current = null;
    imageTouchEndX.current = null;
  };

  const currentActivity = activities[currentIndex];
  const currentImage = currentActivity.images[currentImageIndex];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <h1
              style={{
                marginBottom: 10,
                marginLeft: 10,
                fontWeight: 400,
                color: "#313131",
              }}
            >
              Activities
            </h1>
          </div>
          <div className={styles.rightCol}>
            <p className={styles.subtitle}>
            My Ongoing Journey Through Work, Life, Learning, and the Experiences That Shape Who I Am!
            </p>

            <div className={styles.carouselContainer}>
              <Paper elevation={3} className={styles.carousel}>
                <div className={styles.carouselWrapper}>
                  <div 
                    className={styles.carouselContent}
                    style={{ 
                      transform: `translateX(${slidePosition}%)`,
                      transition: isAnimating ? 'transform 0.6s ease-out' : 'none'
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className={styles.imageContainer}
                      onTouchStart={handleImageTouchStart}
                      onTouchMove={handleImageTouchMove}
                      onTouchEnd={handleImageTouchEnd}
                    >
                      <Fade in={imageFadeIn} timeout={600}>
                        <CardMedia
                          component="img"
                          image={currentImage}
                          alt={currentActivity.title}
                          className={styles.carouselImage}
                        />
                      </Fade>
                      {currentActivity.images.length > 1 && (
                        <div className={styles.imageControls}>
                          <IconButton 
                            onClick={handleImagePrevious}
                            className={styles.imageControlButton}
                            aria-label="previous image"
                          >
                            <ArrowBackIosNewIcon />
                          </IconButton>
                          <span className={styles.imageCounter}>
                            {currentImageIndex + 1} / {currentActivity.images.length}
                          </span>
                          <IconButton 
                            onClick={handleImageNext}
                            className={styles.imageControlButton}
                            aria-label="next image"
                          >
                            <ArrowForwardIosIcon />
                          </IconButton>
                        </div>
                      )}
                    </div>
                    <div className={styles.textContainer}>
                      <Typography variant="h5" component="h2" gutterBottom className={styles.animateText}>
                        {currentActivity.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom className={styles.animateText}>
                        {currentActivity.date}
                      </Typography>
                      <Typography variant="body1" paragraph className={styles.animateText}>
                        {currentActivity.description}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={styles.carouselControls}>
                  <IconButton 
                    onClick={handlePrevious} 
                    className={styles.controlButton}
                    aria-label="previous activity"
                    disabled={isAnimating}
                  >
                    <ArrowBackIosNewIcon />
                  </IconButton>
                  <div className={styles.indicators}>
                    {activities.map((_, index) => (
                      <span 
                        key={index} 
                        className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                      />
                    ))}
                  </div>
                  <IconButton 
                    onClick={handleNext} 
                    className={styles.controlButton}
                    aria-label="next activity"
                    disabled={isAnimating}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 