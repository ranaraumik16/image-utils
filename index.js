
/**
 * Convert a data URL to a buffer array (Uint8ClampedArray)
 * @param {string} inSrc - The data URL to convert
 * @returns {Promise<Uint8ClampedArray>} - A promise that resolves to the buffer array
 */
export function convertImgDataURLToBufferArray(inSrc) {
   return new Promise((resolve, reject) => {
       const canvas = document.createElement('canvas');
       const ctx = canvas.getContext('2d');
       const image = new Image();

       image.onload = function () {
           canvas.width = image.width;
           canvas.height = image.height;
           ctx.drawImage(image, 0, 0);

           const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
           const data = imageData.data;
           resolve(data);
       };

       // Handle image loading errors
       image.onerror = function () {
           reject(new Error('Failed to load the image.'));
       };

       // Set the source of the image
       image.src = inSrc;
    });
}
/**
 * Check if an image is greyscale
 * @param {string} inSrc - The data URL of the image to check
 * @returns {Promise<boolean>} - A promise that resolves to true if the image is greyscale, false otherwise
 */
export function isImageGreyScale(inSrc) {
    return new Promise((resolve, reject) => {
        convertImgDataURLToBufferArray(inSrc).then((data) => {
            let isGreyScale = true;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i] !== data[i + 1] || data[i] !== data[i + 2]) {
                    isGreyScale = false;
                    break;
                }
            }
            resolve(isGreyScale);
        }).catch((err) => {
            console.warn(err);
            resolve(false);
        });
    });
}

