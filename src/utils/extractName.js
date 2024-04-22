const extractNames = (stringRoute) => {
  const fancyNames = stringRoute.split("-");
  return { departure: fancyNames[0], arrival: fancyNames[1] };
};

export default extractNames;
