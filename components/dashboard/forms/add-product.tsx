"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, Info } from "lucide-react";
import React, { useState } from "react";

import { RichTextEditor } from "@/components/ui/rich-text-editor";
import ImageUpload from "../upload/image-upload";
import ImageGallery, { Image as GalleryImage } from "../ui/image-gallery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import TagCreator from "@/components/global/tag-creator";
import { Color, Size, Tag } from "@prisma/client";
import ColorSelector from "@/components/global/color";
import { colorOptions, sizeOptions } from "@/lib/constants";
import SizeSelector from "@/components/global/size";

type Image = GalleryImage & { file: File };

const ProductForm = () => {
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState<Tag[]>([]);
    const [colors, setColors] = useState<Color[]>(colorOptions);
    const [selectedColors, setSelectedColors] = useState<Color[]>([]);
    const [sizes, setSizes] = useState<Size[]>(sizeOptions);
    const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);

    const [product, setProduct] = useState({
        name: "",
        price: 0.0,
        discount: 0.0,
        sku: "",
        qty: "",
        description: "",
        color: "",
        size: "",
        brand: "",
        category: "",
    });
    const [allowCustomerPrice, setAllowCustomerPrice] = useState(false);

    const [images, setImages] = useState<Image[]>([]);

    const [category, setCategory] = useState("");
    const [compatibility, setCompatibility] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSelectChange = (name: string, value: string) => {
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Product data:", product);
    };

    const handleImageUpload = (files: FileList) => {
        const newImages: Image[] = Array.from(files).map((file) => ({
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(file),
            file: file,
        }));

        console.log(newImages);

        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleReorder = (newOrder: Image[]) => {
        setImages(newOrder);
    };

    const handleDelete = (id: string) => {
        setImages(images.filter((image) => image.id !== id));
    };

    const handleSwitchChange = (checked: boolean) => {
        setAllowCustomerPrice(checked);
    };

    const handleCategoryChange = (value: string) => {
        setCategory(value);
    };

    const handleCompatibilityChange = (value: string) => {
        setCompatibility((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
    };

    const handleColorSelect = (colorId: string) => {
        setSelectedColors((prev) => {
            const colorExists = prev.some((c) => c.id === colorId);
            if (colorExists) {
                return prev.filter((c) => c.id !== colorId);
            } else {
                const newColor = colors.find((c) => c.id === colorId);
                return newColor ? [...prev, newColor] : prev;
            }
        });
    };

    const handleSizeSelect = (sizeId: string) => {
        setSelectedSizes((prev) => {
            const sizeExists = prev.some((s) => s.id === sizeId);
            if (sizeExists) {
                return prev.filter((s) => s.id !== sizeId);
            } else {
                const newSize = sizes.find((s) => s.id === sizeId);
                return newSize ? [...prev, newSize] : prev;
            }
        });
    };

    return (
        <div className="flex flex-col gap-2 w-full h-full p-4">
            <div className="w-full bg-background p-4 rounded-md">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="w-1 h-6 bg-green-500 mr-2"></div>
                        <h2 className="text-2xl font-semibold">Name & description</h2>
                    </div>
                    <Button variant="outline" className="flex items-center">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Button>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="flex items-center mb-2">
                            <label htmlFor="product-title" className="text-sm font-medium">
                                Product title
                            </label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 ml-2 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Enter the title of your product</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Input id="product-title" placeholder="Enter product title..." className="w-full" />
                    </div>

                    <div>
                        <div className="flex items-center mb-2">
                            <label htmlFor="description" className="text-sm font-medium">
                                Description
                            </label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 ml-2 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Describe your product in detail</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <RichTextEditor onChange={setDescription} initialContent={description} />
                    </div>
                </div>
            </div>

            {/* product image */}
            <div className="w-full bg-background p-4 rounded-md">
                <ImageUpload onImageUpload={handleImageUpload} />
                {images.length > 0 && (
                    <div className="mt-6">
                        <div className="flex items-center mb-4">
                            <div className="w-1 h-6 bg-pink-500 mr-2"></div>
                            <h2 className="text-2xl font-semibold ">Product Images</h2>
                        </div>
                        <ImageGallery images={images} onReorder={handleReorder} onDelete={handleDelete} />
                    </div>
                )}
            </div>

            {/* Price section */}
            <div className="w-full bg-background p-4 rounded-md">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                    <h2 className="text-2xl font-semibold">Price</h2>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 w-full justify-between">
                        <div className="w-full">
                            <div className="flex items-center mb-2">
                                <label htmlFor="price" className="text-sm font-medium">
                                    Amount
                                </label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Info className="h-4 w-4 ml-2 text-gray-400" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Enter the price of your product</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">$</span>
                                <Input id="price" type="number" placeholder="0.00" value={product.price} onChange={(e) => handleInputChange(e)} name="price" className="w-full" />
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="flex items-center mb-2">
                                <label htmlFor="price" className="text-sm font-medium">
                                    Discount
                                </label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Info className="h-4 w-4 ml-2 text-gray-400" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Enter the discount of your product</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">$</span>
                                <Input id="discount" type="number" placeholder="0.00" value={product.discount} onChange={(e) => handleInputChange(e)} name="discount" className="w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <label htmlFor="allow-custom-price" className="text-sm font-medium mr-2">
                                Allow customers to pay what they want
                            </label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 ml-2 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Enable customers to set their own price</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Switch id="allow-custom-price" checked={allowCustomerPrice} onCheckedChange={handleSwitchChange} />
                    </div>

                    {allowCustomerPrice && (
                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label htmlFor="min-amount" className="text-sm font-medium">
                                    Minimum amount
                                </label>
                                <div className="flex items-center mt-1">
                                    <span className="mr-2 text-lg">$</span>
                                    <Input id="min-amount" type="number" placeholder="0.00" className="w-full" />
                                </div>
                            </div>
                            <div className="w-[48%]">
                                <label htmlFor="suggested-amount" className="text-sm font-medium">
                                    Suggested amount
                                </label>
                                <div className="flex items-center mt-1">
                                    <span className="mr-2 text-lg">$</span>
                                    <Input id="suggested-amount" type="number" placeholder="0.00" className="w-full" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Category & attributes section */}
            <div className="w-full bg-background p-4 rounded-md">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-purple-500 mr-2"></div>
                    <h2 className="text-2xl font-semibold">Category & attributes</h2>
                </div>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="category" className="text-sm font-medium mb-2 block">
                            Category
                        </label>
                        <Select onValueChange={handleCategoryChange} value={category}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="category1">Category 1</SelectItem>
                                <SelectItem value="category2">Category 2</SelectItem>
                                {/* Add more categories as needed */}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-2 block">Compatibility</label>
                        <div className="grid grid-cols-3 gap-4">
                            {["Sketch", "WordPress", "Procreate", "Figma", "HTML", "Illustrator", "Adobe XD", "Keynote", "Framer", "Photoshop", "Maya", "In Design", "Cinema 4D", "Blender", "After Effect"].map((item) => (
                                <div key={item} className="flex items-center space-x-2">
                                    <Checkbox id={item} checked={compatibility.includes(item)} onCheckedChange={() => handleCompatibilityChange(item)} />
                                    <label htmlFor={item} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {item}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="tags" className="text-sm font-medium mb-2 block">
                            Tags
                        </label>
                        <TagCreator getSelectedTags={setTags} defaultTags={[]} tags={tags} />
                    </div>
                </div>
            </div>

            <div className="w-full bg-background p-4 rounded-md">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-yellow-500 mr-2"></div>
                    <h2 className="text-2xl font-semibold">Select size</h2>
                </div>

                <div>
                    <SizeSelector sizes={sizes} selectedSizes={selectedSizes} onSelect={handleSizeSelect} />
                </div>
            </div>

            <div className="w-full bg-background p-4 rounded-md">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-indigo-500 mr-2"></div>
                    <h2 className="text-2xl font-semibold">Select color</h2>
                </div>

                <div>
                    <ColorSelector colors={colors} selectedColors={selectedColors} onSelect={handleColorSelect} />
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
