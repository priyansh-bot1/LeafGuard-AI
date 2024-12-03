import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';
import { preprocessImage, classifyDisease } from '../../utils/imageProcessing';
import DemoResults from './DemoResults';

const sampleImages = [
  { name: 'Healthy Leaf', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09' },
  { name: 'Black Rot', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09' },
  { name: 'Cedar Rust', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09' }
];

export default function DemoUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [model, setModel] = useState<tf.LayersModel | null>(null);

  // Load the model when component mounts
  React.useEffect(() => {
    async function loadModel() {
      try {
        const loadedModel = await tf.loadLayersModel('/model/apple-leaf-disease-classifier.h5');
        setModel(loadedModel);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    }
    loadModel();
  }, []);

  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    setPrediction(null);
    setConfidence(0);
    
    try {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setSelectedImage(previewUrl);

      // Preprocess image and make prediction
      if (model) {
        const processedImage = await preprocessImage(file);
        const predictions = await model.predict(processedImage) as tf.Tensor;
        const predictionData = await predictions.data();
        const maxIndex = predictionData.indexOf(Math.max(...Array.from(predictionData)));
        const maxConfidence = Math.round(predictionData[maxIndex] * 100);
        
        setPrediction(classifyDisease(maxIndex));
        setConfidence(maxConfidence);
        
        // Cleanup tensors
        predictions.dispose();
        processedImage.dispose();
      }
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20 mb-8">
      <h2 className="text-2xl font-semibold text-white mb-6">Interactive Demo: LeafGuard AI in Action</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="space-y-6">
          <div 
            className="border-2 border-dashed border-emerald-700/30 rounded-lg p-8 text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Upload className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Upload Your Image</h3>
            <p className="text-emerald-100/70 mb-4">Drag and drop or click to upload</p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileSelect}
            />
            <button 
              className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all"
              onClick={() => fileInputRef.current?.click()}
            >
              Choose File
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Or Try Our Sample Images</h3>
            <div className="grid grid-cols-3 gap-4">
              {sampleImages.map((image, index) => (
                <button
                  key={index}
                  className="p-4 bg-emerald-900/40 rounded-lg hover:bg-emerald-900/60 transition-all"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <ImageIcon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <span className="text-sm text-emerald-100/80">{image.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-emerald-900/40 rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Image Preview</h3>
          {isLoading ? (
            <div className="w-full h-64 flex items-center justify-center border-2 border-dashed border-emerald-700/30 rounded-lg">
              <span className="text-emerald-100/60">Processing image...</span>
            </div>
          ) : selectedImage ? (
            <div className="space-y-4">
              <img
                src={selectedImage}
                alt="Selected leaf"
                className="w-full h-64 object-cover rounded-lg"
              />
              <DemoResults prediction={prediction} confidence={confidence} />
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center border-2 border-dashed border-emerald-700/30 rounded-lg">
              <span className="text-emerald-100/60">No image selected</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}