
'use client';

import Link from 'next/link';
import { type ContributorsProps, type ArticleFooterContributorInfoProps } from './types';
import { cn } from '@/lib/utils';

const ContributorLink = ({ contributor }: { contributor: ArticleFooterContributorInfoProps }) => {
  if (contributor.link) {
    return <Link href={contributor.link} className="hover:underline">{contributor.name}</Link>;
  }
  return <span>{contributor.name}</span>;
};

const AdditionalCredit = ({ credit }: { credit: ArticleFooterContributorInfoProps }) => (
    <address className="not-italic">
        <span>{credit.name}</span>
        {credit.type && <span> - {credit.type}</span>}
    </address>
);

const ContributorRow = ({ label, contributors }: { label: string; contributors: ArticleFooterContributorInfoProps[] }) => {
  if (!contributors || contributors.length === 0) {
    return null;
  }
  
  // Special handling for 'Additional Credits'
  if (label === 'Additional Credits') {
    return (
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 py-2 border-b border-border last:border-b-0">
            <h2 className="col-span-4 md:col-span-3 font-bold text-foreground">{label}:</h2>
            <div className="col-span-4 md:col-span-9">
                {contributors.map((contributor, index) => (
                    <AdditionalCredit key={index} credit={contributor} />
                ))}
            </div>
        </div>
    )
  }

  return (
    <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 py-2 border-b border-border last:border-b-0">
      <h2 className="col-span-4 md:col-span-3 font-bold text-foreground">{label}:</h2>
      <div className="col-span-4 md:col-span-9">
        <address className="not-italic">
          {contributors.map((contributor, index) => (
            <span key={index}>
              <ContributorLink contributor={contributor} />
              {index < contributors.length - 1 && ', '}
            </span>
          ))}
        </address>
      </div>
    </div>
  );
};


export function Contributors({ className, ...props }: ContributorsProps) {
  const contributorSections = [
    { label: 'Editor', data: props.editors },
    { label: 'Illustrator', data: props.illustrators },
    { label: 'Photographer', data: props.photographers },
    { label: 'Photo Editor', data: props.photoeditors },
    { label: 'Interviewee', data: props.interviewees },
    { label: 'Interviewer', data: props.interviewers },
    { label: 'Translator', data: props.translators },
    { label: 'Host', data: props.hosts },
    { label: 'Videographer', data: props.videographers },
    { label: 'Narrator', data: props.narrators },
    { label: 'Additional Credits', data: props.additionalCredits },
  ];

  return (
    <div className={cn('text-base text-muted-foreground', className)}>
      {contributorSections.map((section, index) => (
         section.data && section.data.length > 0 && <ContributorRow key={index} label={section.label} contributors={section.data} />
      ))}
    </div>
  );
}
