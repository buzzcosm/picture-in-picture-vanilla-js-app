const videoElement = document.getElementById('video');
const pipActionBtn = document.getElementById('pip-action');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.error('whoops, error here:', error);
  }
}

pipActionBtn.addEventListener('click', async () => {
  selectMediaStream();
})

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
})