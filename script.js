const videoElement = document.getElementById('video');
const pipActionBtn = document.getElementById('pip-action');
const buttonContainer = document.querySelector('.button-container');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
    buttonContainer.hidden = false;
  } catch (error) {
    console.error('whoops, error here:', error);
  }
}

async function requestPictureInPicture() {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
}

async function leavePictureInPicture() {
  console.log('leave picture-in-picture event');
}

pipActionBtn.addEventListener('click', selectMediaStream)
button.addEventListener('click', requestPictureInPicture)
videoElement.addEventListener('leavepictureinpicture', leavePictureInPicture);