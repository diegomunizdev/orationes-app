export const formatDate = (date: string | undefined): string | undefined => {
  if (!date) {
    return;
  }

  const formatDate = date.split('/');

  const dateFormated = new Date(
    `${formatDate[2]}-${formatDate[1]}-${formatDate[0]}T12:00:00.000Z`
  ).toISOString();

  return dateFormated;
};
