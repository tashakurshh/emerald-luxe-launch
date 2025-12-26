import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileUp, X, Upload, Check, Image, Loader2 } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';

interface UploadPrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadPrescriptionModal({ isOpen, onClose }: UploadPrescriptionModalProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadDocument, createOrder } = useApp();
  const navigate = useNavigate();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      handleFile(droppedFile);
    }
  }, []);

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setIsUploading(true);
    
    try {
      const doc = await uploadDocument(file, 'prescription');
      await createOrder([], doc.url);
      
      setIsSuccess(true);
      
      setTimeout(() => {
        onClose();
        navigate('/orders');
      }, 1500);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const resetModal = () => {
    setFile(null);
    setPreview(null);
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="glass-card-elevated w-full max-w-lg p-6"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <FileUp className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Upload Prescription</h2>
                  <p className="text-sm text-muted-foreground">We'll process your order</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Upload Area */}
            {!preview ? (
              <div
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer ${
                  isDragging 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                
                <p className="text-foreground font-medium mb-2">
                  Drag & drop your prescription
                </p>
                <p className="text-muted-foreground text-sm">
                  or tap to browse files
                </p>
                <p className="text-muted-foreground/60 text-xs mt-4">
                  Supports JPG, PNG, HEIC
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Preview */}
                <div className="relative rounded-2xl overflow-hidden bg-secondary">
                  <img 
                    src={preview} 
                    alt="Prescription preview" 
                    className="w-full h-64 object-contain"
                  />
                  
                  {isSuccess && (
                    <motion.div
                      className="absolute inset-0 bg-background/80 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ background: 'var(--gradient-success)' }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 15 }}
                      >
                        <Check className="w-10 h-10 text-foreground" />
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* File info */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Image className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{file?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {file && (file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                  <button
                    onClick={resetModal}
                    className="text-muted-foreground hover:text-foreground p-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Actions */}
            {preview && !isSuccess && (
              <div className="flex gap-3 mt-6">
                <button
                  onClick={resetModal}
                  className="apple-button flex-1 py-3"
                >
                  Change
                </button>
                <button
                  onClick={handleUpload}
                  disabled={isUploading}
                  className="apple-button-primary flex-1 py-3 flex items-center justify-center gap-2"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      Upload & Order
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
