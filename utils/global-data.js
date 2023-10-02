export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Matelas et Accessoires Nature';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Matelas Naturels de Haute Qualité : Découvrez le Confort et les Bienfaits pour la Santé avec Literie Pilimpi';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Réalisé par l’agence Web SEO SEA trtDigital';

  return {
    name,
    blogTitle,
    footerText,
  };
};
