import React from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
export default function Uploder() {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 100000,
    onDrop: (acceptedFilees) => {
      alert(acceptedFilees[0].name);
    },
  });
  return (
    <div className="w-full text-center">
      <div
        {...getRootProps()}
        className="px-6 pt-5 pb-6 border-2 border-border border-dashed bg-main rounded-md cursor-pointer "
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex-colo text-subMain text-3xl">
          <FiUploadCloud />
        </span>
        <p className="text-sm mt-2">Drag your image here</p>
        <em className="text-xs text-border">
          (only .jpg and p.ng files will be accepted)
        </em>
      </div>
    </div>
  );
}
