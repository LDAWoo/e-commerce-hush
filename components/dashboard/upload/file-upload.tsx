import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useCallback } from "react";
import { UploadDropzone } from "@uploadthing/react";
import { Button } from "@/components/ui/button";

type Props = {
    apiEndpoint: "avatar" | "media";
    onChange: (url?: string) => void;
    value?: string;
};

const FileUpload = ({ apiEndpoint, onChange, value }: Props) => {
    const type = value?.split(".").pop();

    const onUploadComplete = useCallback(
        (res: any) => {
            if (res && res[0] && res[0].url) {
                onChange(res[0].url);
            }
        },
        [onChange]
    );

    const onUploadError = useCallback((error: Error) => {
        console.error("Upload error:", error);
    }, []);

    if (value) {
        return (
            <div className="flex flex-col gap-2 items-center justify-center">
                {type !== "pdf" ? (
                    <div className="relative w-40 h-40">
                        <Image src={value} className={`object-cover overflow-hidden ${apiEndpoint === "avatar" ? "rounded-full" : "rounded-md"}`} alt="uploaded-image" fill />
                    </div>
                ) : (
                    <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
                        <FileIcon />
                        <a href={value} target="_blank" rel="noopener_noreferrer" className="mt-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline">
                            View PDF
                        </a>
                    </div>
                )}
                <Button onClick={() => onChange("")} type="button" variant="outline">
                    {" "}
                    <X className="h-4 w-4" />
                    Remove
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full bg-muted/30">
            <UploadDropzone
                endpoint={apiEndpoint}
                onClientUploadComplete={onUploadComplete}
                onUploadError={onUploadError}
                config={{ mode: "auto" }}
                appearance={{
                    button: { background: "rgba(0, 0, 0, 0.8)" },
                    container: { padding: "2rem" },
                }}
            />
        </div>
    );
};

export default FileUpload;
