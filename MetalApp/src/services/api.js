export const fetchMetalData = (metal) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("API Error");
      } else {
        resolve({
          name: metal,
          price: (Math.random() * 5000 + 1000).toFixed(2),
          open: (Math.random() * 5000 + 900).toFixed(2),
          close: (Math.random() * 5000 + 950).toFixed(2),
          timestamp: new Date().toLocaleTimeString(),
        });
      }
    }, 1000);
  });
};
