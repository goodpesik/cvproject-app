'use client';

import Cropper from "react-easy-crop";
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import { getCroppedImg } from "../helpers/cropper";
import { uploadPhoto } from "../service/api.service";
import { ImageStatus } from "../models/cv-data.model";

interface ImageSelectorProps {
  onComplete?: (imageUpdated: ImageStatus) => void;
  isEdit: boolean;
  cvId: string;
}

export const ImageSelector = ({ onComplete, isEdit, cvId }: ImageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  let isSelected = false;

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(true);
    setSelectedImage(null);
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  };

  const onCropComplete = (_croppedArea: any, croppedAreaPixels:any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const getCroppedImage = async () => {
    isSelected = true;
    setOpen(false);
    try {
      const croppedImage = await getCroppedImg(
        selectedImage,
        croppedAreaPixels,
      )
      setCroppedImage(croppedImage);
      const uploadResult = await uploadPhoto(croppedImage, isEdit, cvId)
      onComplete?.(uploadResult.data);
      isSelected = false;
    } catch (e) {
      isSelected = false;
      setSelectedImage(null);
      console.error(e)
    }
  }

  return (
      <>
      <div className="section">
         <Button variant="outline" onClick={handleClick}>Choose the image</Button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".png,.jpeg,.jpg"
        onChange={handleChange}
        className="hidden"
      />
      <Dialog open={open} onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen && !isSelected) {
            setSelectedImage(null);
          }
        }}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crop Image</DialogTitle>
          </DialogHeader>
          <div className="crop-container">
            {selectedImage}
            <Cropper
                image={selectedImage ?? ''}
                crop={crop}
                zoom={zoom}
                aspect={3 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
          </div>
          <Button variant="outline" onClick={getCroppedImage}>Upload</Button>
        </DialogContent>
      </Dialog>
      </>
  );
};
