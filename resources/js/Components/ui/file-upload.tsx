import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Ensure this utility exists in your project.

interface FileUploaderProps {
    onFilesSelected?: (files: File[]) => void;
    multiple?: boolean;
    accept?: string;
}

export const FileInput: React.FC<FileUploaderProps> = ({
    onFilesSelected,
    multiple = true,
    accept,
}) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setSelectedFiles(files);
            if (onFilesSelected) onFilesSelected(files);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <input
                type="file"
                onChange={handleFileChange}
                multiple={multiple}
                accept={accept}
                className="hidden"
                id="file-uploader-input"
            />
            <label
                htmlFor="file-uploader-input"
                className={cn(
                    "flex items-center justify-center border border-dashed",
                    "rounded-md p-4 text-gray-500 cursor-pointer",
                    "hover:bg-gray-100 hover:border-gray-400"
                )}
            >
                Click to upload files or drag them here
            </label>
            {selectedFiles.length > 0 && (
                <ul className="mt-2 text-sm text-gray-700">
                    {selectedFiles.map((file) => (
                        <li key={file.name}>{file.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
