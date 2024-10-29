import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

export interface Image {
    id: string;
    url: string;
}

interface ImageGalleryProps {
    images: Image[];
    onReorder: (newOrder: Image[]) => void;
    onDelete: (id: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onReorder, onDelete }) => {
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const newImages = Array.from(images);
        const [reorderedItem] = newImages.splice(result.source.index, 1);
        newImages.splice(result.destination.index, 0, reorderedItem);
        onReorder(newImages);
    };

    const handleDelete = (id: string) => {
        setDeletingId(id);
        setTimeout(() => {
            onDelete(id);
            setDeletingId(null);
        }, 300);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="images" direction="horizontal">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-wrap gap-4">
                        {images.map((image, index) => (
                            <Draggable key={image.id} draggableId={image.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`relative group w-40 h-40 
                                            ${index === 0 ? "border-2 border-orange-500" : ""}
                                            transition-all duration-300 ease-in-out animate-fade-in
                                            ${deletingId === image.id ? "opacity-0 scale-0" : "opacity-100 scale-100"}
                                        `}
                                    >
                                        <Image src={image.url} alt={`Product ${index + 1}`} fill className="w-full h-full object-cover" />
                                        <button onClick={() => handleDelete(image.id)} className="absolute top-2 right-2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <X size={16} />
                                        </button>
                                        {index === 0 && <div className="absolute top-0 left-[50%] line-clamp-1 whitespace-nowrap -translate-x-[50%] bg-orange-500 text-white text-xs px-2 py-1">Main photo</div>}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default ImageGallery;
