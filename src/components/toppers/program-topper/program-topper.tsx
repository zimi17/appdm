'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Clock, Users, Calendar, MapPin, Award, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface ProgramInfo {
  duration?: string;
  level?: 'undergraduate' | 'graduate' | 'certificate' | 'diploma';
  maxStudents?: number;
  startDate?: string;
  endDate?: string;
  location?: string;
  director?: string;
  credits?: number;
  language?: string;
  format?: 'full-time' | 'part-time' | 'online' | 'hybrid';
  tuition?: {
    amount: number;
    currency: string;
    period: string;
  };
  outcomes?: string[];
  requirements?: string[];
}

interface ProgramTopperProps {
  title: string;
  description?: string;
  programInfo: ProgramInfo;
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

export function ProgramTopper({
  title,
  description,
  programInfo,
  image,
  cta,
  variant = 'default',
  theme = 'default',
  className
}: ProgramTopperProps) {
  const [isVisible, setIsVisible] = useState(false);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'undergraduate': return 'bg-blue-100 text-blue-800';
      case 'graduate': return 'bg-purple-100 text-purple-800';
      case 'certificate': return 'bg-green-100 text-green-800';
      case 'diploma': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'full-time': return 'bg-blue-100 text-blue-800';
      case 'part-time': return 'bg-yellow-100 text-yellow-800';
      case 'online': return 'bg-green-100 text-green-800';
      case 'hybrid': return 'bg-purple-100 text-purple-800';
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

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const renderProgramInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {programInfo.duration && (
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Duration</span>
            <p className="font-medium">{programInfo.duration}</p>
          </div>
        </div>
      )}

      {programInfo.level && (
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Level</span>
            <span className={cn(
              "px-2 py-1 text-xs font-medium rounded-full",
              getLevelColor(programInfo.level)
            )}>
              {programInfo.level.toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {programInfo.format && (
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Format</span>
            <span className={cn(
              "px-2 py-1 text-xs font-medium rounded-full",
              getFormatColor(programInfo.format)
            )}>
              {programInfo.format.toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {programInfo.maxStudents && (
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Max Students</span>
            <p className="font-medium">{programInfo.maxStudents}</p>
          </div>
        </div>
      )}

      {programInfo.startDate && (
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Start Date</span>
            <p className="font-medium">{formatDate(programInfo.startDate)}</p>
          </div>
        </div>
      )}

      {programInfo.location && (
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Location</span>
            <p className="font-medium">{programInfo.location}</p>
          </div>
        </div>
      )}

      {programInfo.director && (
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Program Director</span>
            <p className="font-medium">{programInfo.director}</p>
          </div>
        </div>
      )}

      {programInfo.credits && (
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Credits</span>
            <p className="font-medium">{programInfo.credits} credits</p>
          </div>
        </div>
      )}

      {programInfo.language && (
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Language</span>
            <p className="font-medium">{programInfo.language}</p>
          </div>
        </div>
      )}

      {programInfo.tuition && (
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Tuition</span>
            <p className="font-medium">
              {formatPrice(programInfo.tuition.amount, programInfo.tuition.currency)}
              <span className="text-sm text-muted-foreground ml-1">
                /{programInfo.tuition.period}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const renderOutcomes = () => {
    if (!programInfo.outcomes || programInfo.outcomes.length === 0) return null;

    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-muted-foreground">Program Outcomes</h4>
        <ul className="space-y-2">
          {programInfo.outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderRequirements = () => {
    if (!programInfo.requirements || programInfo.requirements.length === 0) return null;

    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-muted-foreground">Requirements</h4>
        <ul className="space-y-2">
          {programInfo.requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>{requirement}</span>
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
          {renderProgramInfo()}
          {renderOutcomes()}
          {renderRequirements()}
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
        {renderProgramInfo()}
        {renderOutcomes()}
        {renderRequirements()}
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
