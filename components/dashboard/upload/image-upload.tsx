import React, { useState } from "react";
import { Upload } from "lucide-react";

interface ImageUploadProps {
    onImageUpload: (files: FileList) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) {
            onImageUpload(e.dataTransfer.files);
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            onImageUpload(e.target.files);
        }
    };

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold flex items-center">
                    <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                    Images & CTA
                </h2>
            </div>

            <div className="mb-4">
                <label className="text-sm font-medium flex items-center">
                    Cover images
                    <span className="ml-2 text-gray-400 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">i</span>
                </label>
            </div>

            <div className={`border-2 border-dashed rounded-lg p-12 text-center ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}>
                <div className="flex flex-col items-center">
                    <Upload className="w-6 h-6 text-gray-400 mb-2" />
                    <label htmlFor="file-upload" className="cursor-pointer bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                        Click or drop image
                        <input id="file-upload" type="file" className="hidden" onChange={handleFileInput} accept="image/*" multiple />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
