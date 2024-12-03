import * as tf from '@tensorflow/tfjs';

export async function preprocessImage(imageFile: File): Promise<tf.Tensor> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = async () => {
      try {
        // Convert image to tensor
        const tensor = tf.browser.fromPixels(img)
          .resizeNearestNeighbor([100, 100]) // Resize to model input size
          .toFloat()
          .expandDims();
        
        resolve(tensor);
      } catch (error) {
        reject(error);
      }
    };
    img.onerror = (error) => reject(error);
    img.src = URL.createObjectURL(imageFile);
  });
}

export function classifyDisease(prediction: number): string {
  switch(prediction) {
    case 0:
      return 'Healthy';
    case 1:
      return 'Apple Scab';
    case 2:
      return 'Black Rot';
    default:
      return 'Cedar Apple Rust';
  }
}