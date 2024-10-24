import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Upload as UploadIcon, File, Loader } from 'lucide-react';

function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    multiple: false
  });

  const handleUpload = async () => {
    if (!file) return;
    
    setUploading(true);
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setUploading(false);
    navigate('/results');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Upload Your Document
      </h1>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200 ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
        }`}
      >
        <input {...getInputProps()} />
        <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        {isDragActive ? (
          <p className="text-lg text-blue-600">Drop your file here</p>
        ) : (
          <div>
            <p className="text-lg text-gray-600 mb-2">
              Drag and drop your file here, or click to select
            </p>
            <p className="text-sm text-gray-500">
              Supported formats: PDF, DOC, DOCX, TXT
            </p>
          </div>
        )}
      </div>

      {file && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <File className="h-6 w-6 text-blue-600" />
            <span className="text-gray-700">{file.name}</span>
          </div>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className={`mt-6 w-full py-3 px-4 rounded-lg font-medium ${
          !file || uploading
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        } transition-colors duration-200`}
      >
        {uploading ? (
          <span className="flex items-center justify-center">
            <Loader className="animate-spin h-5 w-5 mr-2" />
            Processing...
          </span>
        ) : (
          'Analyze Document'
        )}
      </button>
    </div>
  );
}

export default Upload;