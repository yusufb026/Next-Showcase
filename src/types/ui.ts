export type TUrl = `/${string}`;

export type TLink = { label: string; link?: TUrl };

export type TNabBarLinks = {
  Acceuil: { label: string; link: TUrl };
  Information: { label: string; link: TLink[] };
  ContactezNous: { label: string; link: TUrl };
  Inscription: { label: string; link: TUrl };
};

export type TAtelierList = {
  title: string;
  description: string;
  image: `/ateliers/${string}`;
}[];
