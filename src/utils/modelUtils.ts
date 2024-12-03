import * as tf from '@tensorflow/tfjs';

const CLASSES = ['Healthy', 'Apple Scab', 'Black Rot', 'Cedar Apple Rust'];
let model: tf.LayersModel | null = null;

export const loadModel = async () => {
  if (!model) {
    model = await tf.loadLayersModel('/src/model/model.json');
  }
  return model;
};

export const preprocessImage = async (imageUrl: string): Promise<tf.Tensor> => {
  // Load the image
  const img = new Image();
  img.src = imageUrl;
  await new Promise((resolve) => (img.onload = resolve));

  // Convert to grayscale and resize
  const tensor = tf.browser.fromPixels(img, 1)
    .resizeBilinear([100, 100])
    .expandDims(0);

  return tensor;
};

export const predictImage = async (imageUrl: string): Promise<string> => {
  try {
    const model = await loadModel();
    const processedImage = await preprocessImage(imageUrl);
    
    const predictions = await model.predict(processedImage) as tf.Tensor;
    const predictionArray = await predictions.array();
    const predictedIndex = predictionArray[0].indexOf(Math.max(...predictionArray[0]));
    
    // Cleanup
    predictions.dispose();
    processedImage.dispose();

    return CLASSES[predictedIndex];
  } catch (error) {
    console.error('Prediction error:', error);
    return 'Error during prediction';
  }
};