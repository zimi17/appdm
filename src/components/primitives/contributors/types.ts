export interface ArticleFooterContributorInfoProps {
  name: string;
  type?: string;
  link?: string;
}

export interface ContributorsProps {
  editors?: ArticleFooterContributorInfoProps[];
  photographers?: ArticleFooterContributorInfoProps[];
  photoeditors?: ArticleFooterContributorInfoProps[];
  illustrators?: ArticleFooterContributorInfoProps[];
  interviewees?: ArticleFooterContributorInfoProps[];
  interviewers?: ArticleFooterContributorInfoProps[];
  translators?: ArticleFooterContributorInfoProps[];
  hosts?: ArticleFooterContributorInfoProps[];
  videographers?: ArticleFooterContributorInfoProps[];
  narrators?: ArticleFooterContributorInfoProps[];
  additionalCredits?: ArticleFooterContributorInfoProps[];
  className?: string;
}
