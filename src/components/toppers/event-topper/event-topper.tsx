'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Calendar, Clock, MapPin, Users, Ticket, ArrowRight, ExternalLink } from 'lucide-react';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface EventInfo {
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  venue?: string;
  maxAttendees?: number;
  currentAttendees?: number;
  price?: {
    amount: number;
    currency: string;
    type: 'free' | 'paid' | 'donation';
  };
  category?: string;
  organizer?: string;
  contact?: {
    email?: string;
    phone?: string;
    website?: string;
  };
  registration?: {
    required: boolean;
    deadline?: string;
    url?: string;
  };
}

interface EventTopperProps {
  title: string;
  description?: string;
  eventInfo: EventInfo;
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

export function EventTopper({
  title,
  description,
  eventInfo,
  image,
  cta,
  variant = 'default',
  theme = 'default',
  className
}: EventTopperProps) {
  const [isVisible, setIsVisible] = useState(false);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (amount: number, currency: string) => {
    if (amount === 0) return 'Free';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getPriceColor = (type: string) => {
    switch (type) {
      case 'free': return 'bg-green-100 text-green-800';
      case 'paid': return 'bg-blue-100 text-blue-800';
      case 'donation': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderEventInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-3">
        <Calendar className="w-5 h-5 text-primary" />
        <div>
          <span className="text-sm text-muted-foreground">Date</span>
          <p className="font-medium">{formatDate(eventInfo.startDate)}</p>
          {eventInfo.endDate && eventInfo.endDate !== eventInfo.startDate && (
            <p className="text-sm text-muted-foreground">
              to {formatDate(eventInfo.endDate)}
            </p>
          )}
        </div>
      </div>

      {eventInfo.startTime && (
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Time</span>
            <p className="font-medium">
              {formatTime(eventInfo.startTime)}
              {eventInfo.endTime && ` - ${formatTime(eventInfo.endTime)}`}
            </p>
          </div>
        </div>
      )}

      {eventInfo.location && (
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Location</span>
            <p className="font-medium">{eventInfo.location}</p>
            {eventInfo.venue && (
              <p className="text-sm text-muted-foreground">{eventInfo.venue}</p>
            )}
          </div>
        </div>
      )}

      {eventInfo.maxAttendees && (
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Capacity</span>
            <p className="font-medium">
              {eventInfo.currentAttendees || 0} / {eventInfo.maxAttendees} attendees
            </p>
            {eventInfo.maxAttendees && eventInfo.currentAttendees && (
              <div className="w-full bg-muted rounded-full h-2 mt-1">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${(eventInfo.currentAttendees / eventInfo.maxAttendees) * 100}%`
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {eventInfo.price && (
        <div className="flex items-center gap-3">
          <Ticket className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Price</span>
            <div className="flex items-center gap-2">
              <p className="font-medium">
                {formatPrice(eventInfo.price.amount, eventInfo.price.currency)}
              </p>
              <span className={cn(
                "px-2 py-1 text-xs font-medium rounded-full",
                getPriceColor(eventInfo.price.type)
              )}>
                {eventInfo.price.type.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}

      {eventInfo.category && (
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Category</span>
            <p className="font-medium">{eventInfo.category}</p>
          </div>
        </div>
      )}

      {eventInfo.organizer && (
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <span className="text-sm text-muted-foreground">Organizer</span>
            <p className="font-medium">{eventInfo.organizer}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderRegistrationInfo = () => {
    if (!eventInfo.registration) return null;

    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-muted-foreground">Registration</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span>
              {eventInfo.registration.required ? 'Registration Required' : 'No Registration Required'}
            </span>
          </div>
          
          {eventInfo.registration.deadline && (
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Deadline: {formatDate(eventInfo.registration.deadline)}</span>
            </div>
          )}
          
          {eventInfo.registration.url && (
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <a
                href={eventInfo.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                Register Here
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderContactInfo = () => {
    if (!eventInfo.contact) return null;

    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-muted-foreground">Contact</h4>
        <div className="space-y-2">
          {eventInfo.contact.email && (
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <a
                href={`mailto:${eventInfo.contact.email}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {eventInfo.contact.email}
              </a>
            </div>
          )}
          
          {eventInfo.contact.phone && (
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <a
                href={`tel:${eventInfo.contact.phone}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {eventInfo.contact.phone}
              </a>
            </div>
          )}
          
          {eventInfo.contact.website && (
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <a
                href={eventInfo.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                Website
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
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
          {renderEventInfo()}
          {renderRegistrationInfo()}
          {renderContactInfo()}
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
        {renderEventInfo()}
        {renderRegistrationInfo()}
        {renderContactInfo()}
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
