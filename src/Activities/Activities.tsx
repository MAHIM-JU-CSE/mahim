"use client";

import React, { useState } from 'react';
import styles from './Activities.module.css';
import { 
  CardMedia, 
  Typography, 
  IconButton,
  Paper
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
    title: "Knowledge Graph Session at SRBD",
    date: "April 16, 2024",
    description: "Conducted a session on Knowledge Graph build tool for SRBD engineers, demonstrating the integration with RDFox engine and its applications in AI.",
    images: ["/pro.jpg", "/pro2.jpg"], // Multiple images for the activity
  },
  {
    id: 2,
    title: "Collaboration with Oxford Semantic Technology",
    date: "March 2024",
    description: "Collaborated with Oxford engineers on fine-tuning LLMs using our Knowledge Graph build tool. Worked on improving semantic reasoning capabilities.",
    images: ["/pro2.jpg", "/profile.png"], // Multiple images for the activity
  },
  {
    id: 3,
    title: "Business Trip to Oxford, UK",
    date: "February 2024",
    description: "Visited Oxford Semantic Technology headquarters for project planning and technical discussions. Met with the team to align on project goals and timelines.",
    images: ["/profile.png", "/pro.jpg"], // Multiple images for the activity
  },
  // Add more activities as needed
];

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);

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
    const currentActivity = activities[currentIndex];
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentActivity.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImagePrevious = () => {
    const currentActivity = activities[currentIndex];
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentActivity.images.length - 1 : prevIndex - 1
    );
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
                  >
                    <div className={styles.imageContainer}>
                      <CardMedia
                        component="img"
                        image={currentImage}
                        alt={currentActivity.title}
                        className={styles.carouselImage}
                      />
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