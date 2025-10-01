"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './Activities.module.css';
import { 
  CardMedia, 
  Typography, 
  IconButton,
  Paper,
  Box,
  Stack
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
    description: "Conducted a session on patent strategy in front of engineers at SRBD, specifically sharing my A1 patent journey experience. Demonstrated the complete process from ideation to patent filing, including best practices for intellectual property protection and strategies for successful patent applications.",
    images: ["./IMG_1493.jpg"], // Multiple images for the activity
  },
  {
    id: 2,
    title: "Business Trip to Oxford, UK",
    date: "March 2025",
    description: "Visited Oxford Semantic Technologies, UK for project planning and technical discussions. Met with the team to align on project goals and timelines.",
    images: [
      "./20A92FD5-7473-4FD2-A8CE-004FE067586C_1_105_c.jpeg",
      "./1A6CE931-16B7-41D3-A3C1-AFADEDF8AFB2_1_105_c.jpeg",
      "./B4D924D6-EEB0-45F6-AF6B-19A734447A16_1_105_c.jpeg",
      "./EFC7FFC2-070E-4216-A20F-2B06964BD2CB_1_105_c.jpeg",
      "./504BCFC9-DD02-4356-91F3-EF559681764F_1_105_c.jpeg",
      "./9EB286FC-0E0A-40A3-8B00-F81F8796ABED_1_105_c.jpeg",
      "./7ACE9258-40E5-4028-98B1-1BC26B249DC5_1_105_c.jpeg"
    ],
  },
  {
    id: 3,
    title: "Exploring London: A Glimpse of the City",
    date: "March 2025",
    description: "Took some time to explore the vibrant city of London during my UK visit. Experienced the rich history, iconic landmarks, and diverse culture of one of the world's most dynamic cities.",
    images: [
      "./ABD7AB55-E7C5-4D06-B121-2537BF0D4257_1_105_c.jpeg",
      "./A91AC935-5E8B-452B-A026-B6457B0A5434_1_105_c.jpeg",
      
    ],
  },
  // Add more activities as needed
];

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoRotateTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate images
  useEffect(() => {
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }

    autoRotateTimer.current = setInterval(() => {
      const currentActivity = activities[currentIndex];
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentActivity.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      if (autoRotateTimer.current) {
        clearInterval(autoRotateTimer.current);
      }
    };
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1
    );
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === activities.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentImageIndex(0);
  };

  const handleImageNext = () => {
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
    const currentActivity = activities[currentIndex];
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentActivity.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImagePrevious = () => {
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
    const currentActivity = activities[currentIndex];
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentActivity.images.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    setCurrentImageIndex(0);
  };

  const currentActivity = activities[currentIndex];
  const currentImage = currentActivity.images[currentImageIndex];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Activities
        </h1>
        
        <p className={styles.subtitle}>
          My Ongoing Journey Through Work, Life, Learning, and the Experiences That Shape Who I Am!
        </p>

            <Paper 
              elevation={2} 
              sx={{ 
                width: '100%',
                overflow: 'hidden',
                borderRadius: '12px',
                position: 'relative',
                backgroundColor: 'transparent',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Box sx={{ 
                position: 'relative', 
                width: '100%',
                paddingTop: '56.25%', // 16:9 aspect ratio
                borderRadius: '12px 12px 0 0',
                overflow: 'hidden'
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CardMedia
                    component="img"
                    image={currentImage}
                    alt={currentActivity.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  />
                </Box>
                {currentActivity.images.length > 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <IconButton 
                      onClick={handleImagePrevious}
                      sx={{ 
                        color: 'white',
                        padding: '4px',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                      aria-label="previous image"
                    >
                      <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      {currentImageIndex + 1} / {currentActivity.images.length}
                    </Typography>
                    <IconButton 
                      onClick={handleImageNext}
                      sx={{ 
                        color: 'white',
                        padding: '4px',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                      aria-label="next image"
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>
                )}
              </Box>

              <Box sx={{ 
                p: 2.5,
                backgroundColor: 'white',
                borderRadius: '0 0 12px 12px',
                height: '180px', // Fixed height for description section
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 0.5,
                    color: '#1a1a1a',
                    flexShrink: 0 // Prevent title from shrinking
                  }}
                >
                  {currentActivity.title}
                </Typography>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    color: '#666',
                    mb: 1,
                    fontSize: '0.85rem',
                    flexShrink: 0 // Prevent date from shrinking
                  }}
                >
                  {currentActivity.date}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#444',
                    lineHeight: 1.6,
                    fontSize: '0.9rem',
                    overflowY: 'auto', // Add scroll for overflow
                    flexGrow: 1, // Allow description to take remaining space
                    pr: 1, // Add some padding for scrollbar
                    '&::-webkit-scrollbar': {
                      width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'rgba(0, 0, 0, 0.1)',
                      borderRadius: '2px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      background: 'rgba(0, 0, 0, 0.2)',
                    }
                  }}
                >
                  {currentActivity.description}
                </Typography>
              </Box>

              <Stack 
                direction="row" 
                spacing={1.5} 
                sx={{ 
                  p: 1.5, 
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: '0 0 12px 12px'
                }}
              >
                <IconButton 
                  onClick={handlePrevious}
                  sx={{ 
                    padding: '6px',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                  aria-label="previous activity"
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <Stack direction="row" spacing={0.5}>
                  {activities.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => handleIndicatorClick(index)}
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: index === currentIndex ? 'primary.main' : 'rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: index === currentIndex ? 'primary.dark' : 'rgba(0, 0, 0, 0.2)',
                          transform: 'scale(1.2)'
                        }
                      }}
                    />
                  ))}
                </Stack>
                <IconButton 
                  onClick={handleNext}
                  sx={{ 
                    padding: '6px',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                  aria-label="next activity"
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Paper>
      </div>
    </div>
  );
} 