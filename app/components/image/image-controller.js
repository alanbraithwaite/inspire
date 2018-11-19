//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let imageService = new ImageService()

function drawImage(image) {
  let template = ''
  let index = Math.floor(Math.random() * (image.images.length + 1));
  template = `url(${image.images[index].url})`
  console.log(image.images[index].url)
  document.getElementById("background").style.backgroundImage = template
}

export default class ImageController {

  constructor() {
    //this will fire off get image right away
    this.getImage()
  }
  getImage() {
    imageService.getImage(image => {
      console.log(image);
      drawImage(image)
      //What can you do with this weather object?
    })
  }
}


