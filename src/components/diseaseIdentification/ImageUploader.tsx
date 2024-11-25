import React from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

export default function ImageUploader() {
  return (
    <div className="mb-20">
      <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
        <h2 className="text-2xl font-bold text-white mb-8">Upload Your Leaf Image</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Area */}
          <div className="space-y-6">
            <div className="border-2 border-dashed border-emerald-700/30 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Drop your image here</h3>
              <p className="text-emerald-100/70 mb-4">or click to browse</p>
              <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
                Choose File
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Image Guidelines</h3>
              <ul className="space-y-2 text-emerald-100/70">
                <li>• Use clear, well-lit images</li>
                <li>• Capture entire leaf surface</li>
                <li>• Avoid shadows when possible</li>
                <li>• Include both healthy and affected areas</li>
              </ul>
            </div>
          </div>

          {/* Preview Area */}
          <div className="bg-emerald-900/40 rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-4">Image Preview</h3>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-emerald-700/30 rounded-lg">
              <span className="text-emerald-100/60">No image selected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}