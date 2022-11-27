function enablePhotoUpload() {
  const imageImput = document.querySelector('#image-input');
  imageImput.addEventListener("change", function() {
    const reader = new FileReader()
    reader.addEventListener("load", ()=>{
      const uploadImage = reader.result
      changeMemePicture(uploadImage)
      //document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
    })
    reader.readAsDataURL(this.files[0])
})
};

async function mapImageList(){
const memesObject = [
  {
  "name": "chapolin" ,
  "path": "./pictures/chapolin.jpg"
    },
    {
      "name": "chloe" ,
      "path": "pictures/chloe.jpg"
        },
        {
          "name": "funny-cat1" ,
          "path": "pictures/funny-cat1.png"
            },
            {
              "name": "funny-cat2" ,
              "path": "pictures/funny-cat2.png"
                },
  ]
  return memesObject
};

async function createGallery(imagelist){
    const memeSelector = document.querySelector('#meme-list')

    imagelist.forEach(picture => {
      let newOption = document.createElement("option")
      newOption.text = picture.name.toUpperCase()
      newOption.value = picture.path
      memeSelector.appendChild(newOption)
    });

};

async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-image")
  displayImage.style.backgroundImage = `url('${photo}')`

};

async function main(){
  const memesImageList = await mapImageList()
  enablePhotoUpload()
  await createGallery(memesImageList)
  await changeMemePicture(memesImageList[0].path)
};
main()