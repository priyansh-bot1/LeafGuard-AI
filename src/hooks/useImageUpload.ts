import { useState, ChangeEvent } from 'react';
import { createImageUrl } from '../utils/imageUtils';
import { predictImage } from '../utils/modelUtils';

export function useImageUpload() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const processImage = async (url: string) => {
    setIsLoading(true);
    try {
      const result = await predictImage(url);
      setPrediction(result);
    } catch (error) {
      console.error('Error processing image:', error);
      setPrediction('Error analyzing image');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const url = await createImageUrl(file);
        setImageUrl(url);
        await processImage(url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleSampleImage = async (url: string) => {
    setImageUrl(url);
    await processImage(url);
  };

  return {
    imageUrl,
    prediction,
    isLoading,
    handleImageUpload,
    handleSampleImage
  };
}