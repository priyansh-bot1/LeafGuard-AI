import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

const sampleImages = [
  { name: 'Healthy Leaf', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09' },
  { name: 'Black Rot', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09' },
  { name: 'Cedar Rust', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09' }
];

export default function DemoUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20 mb-8">
      <h2 className="text-2xl font-semibold text-white mb-6">Interactive Demo: LeafGuard AI in Action</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-emerald-700/30 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Upload Your Image</h3>
            <p className="text-emerald-100/70 mb-4">Drag and drop or click to upload</p>
            <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
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
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected leaf"
              className="w-full h-64 object-cover rounded-lg"
            />
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