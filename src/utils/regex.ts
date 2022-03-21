const mail = (mail: string) => {
  const r =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

  return r.test(mail);
};

const url = (url: string) => {
  const r =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g; // eslint-disable-line

  return r.test(url);
};

const time = (time: string) => {
  const r = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/g; // eslint-disable-line

  return r.test(time);
};

export default { mail, url, time };
