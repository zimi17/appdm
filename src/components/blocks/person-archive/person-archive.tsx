'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, Filter, User, Mail, Phone, MapPin } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';
import { ArchivePagePagination } from '../../primitives/archive-page-pagination/archive-page-pagination';

interface Person {
  id: string;
  name: string;
  title?: string;
  department?: string;
  bio?: string;
  expertise?: string[];
  email?: string;
  phone?: string;
  location?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  href?: string;
  links?: {
    label: string;
    href: string;
  }[];
}

interface PersonArchiveProps {
  title?: string;
  description?: string;
  people: Person[];
  showSearch?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  itemsPerPage?: number;
  departments?: string[];
  showBio?: boolean;
  showContact?: boolean;
  showExpertise?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function PersonArchive({
  title,
  description,
  people,
  showSearch = true,
  showFilters = true,
  showPagination = true,
  itemsPerPage = 12,
  departments = [],
  showBio = true,
  showContact = true,
  showExpertise = true,
  theme = 'default',
  className
}: PersonArchiveProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const filteredPeople = people.filter(person => {
    const matchesSearch = !searchQuery || 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.department?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.bio?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.expertise?.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDepartment = !selectedDepartment || person.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const totalPages = Math.ceil(filteredPeople.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPeople = filteredPeople.slice(startIndex, endIndex);

  const renderPerson = (person: Person, index: number) => (
    <motion.div
      key={person.id}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {person.href ? (
        <a href={person.href} className="block">
          {renderPersonContent(person)}
        </a>
      ) : (
        renderPersonContent(person)
      )}
    </motion.div>
  );

  const renderPersonContent = (person: Person) => (
    <div className="p-6">
      <div className="flex items-start gap-4">
        {/* Image */}
        {person.image && (
          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-full">
            <LazyImage
              src={person.image.src}
              alt={person.image.alt}
              className="w-full h-full"
              imageClassName="object-cover"
              data-ai-hint={person.image.hint}
              fill
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-headline text-lg font-semibold mb-1">
            {person.name}
          </h3>
          
          {person.title && (
            <p className="text-primary font-medium text-sm mb-1">
              {person.title}
            </p>
          )}

          {person.department && (
            <p className="text-muted-foreground text-sm mb-3">
              {person.department}
            </p>
          )}

          {showBio && person.bio && (
            <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
              {person.bio}
            </p>
          )}

          {/* Expertise */}
          {showExpertise && person.expertise && person.expertise.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {person.expertise.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
              {person.expertise.length > 3 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  +{person.expertise.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Contact Info */}
          {showContact && (
            <div className="space-y-1">
              {person.email && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-3 h-3" />
                  <a 
                    href={`mailto:${person.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {person.email}
                  </a>
                </div>
              )}

              {person.phone && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-3 h-3" />
                  <a 
                    href={`tel:${person.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {person.phone}
                  </a>
                </div>
              )}

              {person.location && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{person.location}</span>
                </div>
              )}
            </div>
          )}

          {/* Links */}
          {person.links && person.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {person.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

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
          {title && (
            <ComponentHeader 
              title={title} 
              description={description}
              className="mb-12"
            />
          )}

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            {showSearch && (
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search people..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            )}

            {/* Filters */}
            {showFilters && departments.length > 0 && (
              <div className="flex gap-2">
                <Filter className="w-4 h-4 text-muted-foreground mt-2" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All Departments</option>
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredPeople.length} person{filteredPeople.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* People Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedPeople.map((person, index) => renderPerson(person, index))}
          </div>

          {/* No Results */}
          {filteredPeople.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="font-headline text-lg font-semibold mb-2">
                No people found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Pagination */}
          {showPagination && totalPages > 1 && (
            <div className="flex justify-center">
              <ArchivePagePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
