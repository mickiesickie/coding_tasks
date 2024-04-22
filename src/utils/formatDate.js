const formatDate = (dateTime) => {
  const date = new Date(dateTime);
  const formats = {
    date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    localTime: `${date.toLocaleDateString("en-US")}`,
    cet: `${date.toLocaleString("en-US", { timeZone: "CET" })}`
  };
  return formats;
};

export default formatDate;
