# image-utils

Utilities for image

-----------------------------------------------------------

## Installation

You can install `image-utils` using npm:

```
    npm install image-utils
```
-----------------------------------------------------------
-----------------------------------------------------------
-----------------------------------------------------------

## Usage



List of functions:

- [convertImgDataURLToBufferArray](#convertImgDataURLToBufferArray)
- [isImageGreyScale](#isImageGreyScale)

-----------------------------------------------------------

### convertImgDataURLToBufferArray

Convert a data URL to a buffer array (Uint8ClampedArray)

**Parameters**

-   `inSrc` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The data URL to convert

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)>** A promise that resolves to the buffer array

-----------------------------------------------------------

### isImageGreyScale

Check if an image is greyscale

**Parameters**

-   `inSrc` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The data URL of the image to check

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** A promise that resolves to true if the image is greyscale, false otherwise

## License

This project is licensed under the MIT License.
