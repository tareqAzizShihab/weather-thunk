const getFormatedTime = (time, type, patternObj) => {
  if (!type) {
    return time;
  } else {
    const date = new Date(time * 1000);

    let pattern;
    if (!patternObj) {
      if (type === "date") {
        pattern = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
      } else if (type === "time") {
        pattern = {
          hour: "numeric",
          minute: "numeric",
        };
      }
    } else {
      pattern = patternObj;
    }

    return new Intl.DateTimeFormat("en-us", pattern).format(date);
  }
};
export default getFormatedTime;
