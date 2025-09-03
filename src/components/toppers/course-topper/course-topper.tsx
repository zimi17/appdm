'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Clock, Users, Calendar, MapPin, Star, BookOpen, Award, ArrowRight } from 'lucide-react';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface CourseInfo {
  duration?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  maxStudents?: number;
  startDate?: string;
  endDate?: string;
  location?: string;
  instructor?: string;
  rating?: number;
  credits?: number;
  language?: string;
  prerequisites?: string[];
}

interface CourseTopperProps {
  title: string;
  description?: string;
  courseInfo: CourseInfo;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  variant?: 'default' | 'centered' | 'split';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function CourseTopper({
  title,
  description,
  courseInfo,
  image,
  cta,
  variant = 'default',
  theme = 'default',
  className
}: CourseTopperProps) {
  const [isVisible, setIsVisible] = useState(false);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={cn(
          "text-lg",
          i < rating ? "text-yellow-400" : "text-gray-300"
        )}
      >
        ★
      </span>
    ));
  };

  const renderCourseInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {courseInfo.duration && (
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Duration</span>
            <p className="font-medium">{courseInfo.duration}</p>
          </div>
        </div>
      )}

      {courseInfo.level && (
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Level</span>
            <span className={cn(
              "px-2 py-1 text-xs font-medium rounded-full",
              getLevelColor(courseInfo.level)
            )}>
              {courseInfo.level.toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {courseInfo.maxStudents && (
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Max Students</span>
            <p className="font-medium">{courseInfo.maxStudents}</p>
          </div>
        </div>
      )}

      {courseInfo.startDate && (
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Start Date</span>
            <p className="font-medium">{formatDate(courseInfo.startDate)}</p>
          </div>
        </div>
      )}

      {courseInfo.location && (
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Location</span>
            <p className="font-medium">{courseInfo.location}</p>
          </div>
        </div>
      )}

      {courseInfo.instructor && (
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Instructor</span>
            <p className="font-medium">{courseInfo.instructor}</p>
          </div>
        </div>
      )}

      {courseInfo.rating && (
        <div className="flex items-center gap-3">
          <Star className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Rating</span>
            <div className="flex items-center gap-1">
              {renderStars(courseInfo.rating)}
              <span className="text-sm text-muted-foreground ml-1">
                ({courseInfo.rating}/5)
              </span>
            </div>
          </div>
        </div>
      )}

      {courseInfo.credits && (
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Credits</span>
            <p className="font-medium">{courseInfo.credits} credits</p>
          </div>
        </div>
      )}

      {courseInfo.language && (
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Language</span>
            <p className="font-medium">{courseInfo.language}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderPrerequisites = () => {
    if (!courseInfo.prerequisites || courseInfo.prerequisites.length === 0) return null;

    return (
      <div className="space-y-2">
        <h4 className="font-semibold text-sm text-muted-foreground">Prerequisites</h4>
        <ul className="space-y-1">
          {courseInfo.prerequisites.map((prereq, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {prereq}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderDefaultVariant = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Content */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {renderCourseInfo()}
          {renderPrerequisites()}
        </motion.div>

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={cta.href}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
                cta.variant === 'secondary' ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" :
                cta.variant === 'outline' ? "border border-primary text-primary hover:bg-primary hover:text-primary-foreground" :
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {cta.text}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>

      {/* Image */}
      {image && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <LazyImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full"
              imageClassName="object-cover"
              data-ai-hint={image.hint}
              fill
            />
          </div>
        </motion.div>
      )}
    </div>
  );

  const renderCenteredVariant = () => (
    <div className="text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>

      {image && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <LazyImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full"
              imageClassName="object-cover"
              data-ai-hint={image.hint}
              fill
            />
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        {renderCourseInfo()}
        {renderPrerequisites()}
      </motion.div>

      {cta && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={cta.href}
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
              cta.variant === 'secondary' ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" :
              cta.variant === 'outline' ? "border border-primary text-primary hover:bg-primary hover:text-primary-foreground" :
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {cta.text}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'centered':
        return renderCenteredVariant();
      case 'split':
        return renderDefaultVariant();
      default:
        return renderDefaultVariant();
    }
  };

  return (
    <motion.section 
      className={cn(
        "py-16 md:py-24",
        themeClasses[theme],
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
