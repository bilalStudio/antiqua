export const baseUrl = "https://etiqua-backend.herokuapp.com/";

export const getImg64 = async (imgUrl, cb) => {
  const convertImgToBase64URL = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        let canvas = document.createElement("CANVAS");
        const ctx = canvas.getContext("2d");
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL();
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  };
  //for the demonstration purposes I used proxy server to avoid cross origin error
  const image = await convertImgToBase64URL(imgUrl);
  cb(image);
  return image;
};

export const allowedFileSize = 500000;
export const fileErrorMessage = "Select image less then 10KB";
