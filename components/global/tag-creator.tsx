"use client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Tag } from "@prisma/client";
import { PlusCircleIcon, TrashIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import TagComponent from "./tag";
import { deleteTag, getTags, upsertTag } from "@/lib/queries/tag";
import { saveActivityLogsNotification } from "@/lib/queries";
import { toast } from "../ui/use-toast";

type Props = {
    getSelectedTags: (tags: Tag[]) => void;
    defaultTags?: Tag[];
};

const TagColors = ["BLUE", "ORANGE", "ROSE", "PURPLE", "GREEN"] as const;
export type TagColor = (typeof TagColors)[number];

const TagCreator = ({ getSelectedTags, defaultTags }: Props) => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>(defaultTags || []);
    const [tags, setTags] = useState<Tag[]>([]);
    const router = useRouter();
    const [value, setValue] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    useEffect(() => {
        getSelectedTags(selectedTags);
    }, [selectedTags]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTags();
            if (response) setTags(response);
        };
        fetchData();
    }, []);

    const handleDeleteSelection = (tagId: string) => {
        setSelectedTags(selectedTags.filter((tag) => tag.id !== tagId));
    };

    const handleAddTag = async () => {
        if (!value) {
            toast({
                variant: "destructive",
                title: "Tags need to have a name",
            });
            return;
        }
        if (!selectedColor) {
            toast({
                variant: "destructive",
                title: "Please Select a color",
            });
            return;
        }

        const tag: Tag = {
            id: v4(),
            color: selectedColor,
            name: value,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        setTags([...tags, tag]);
        setValue("");
        setSelectedColor("");
        try {
            const response = await upsertTag(tag);
            toast({
                title: "Created the tag",
            });

            await saveActivityLogsNotification({
                userId: undefined,
                description: `Updated a tag | ${response?.name}`,
                productId: "",
            });
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Could not create tag",
            });
        }
    };

    const handleAddSelections = (tag: Tag) => {
        if (selectedTags.every((t) => t.id !== tag.id)) {
            setSelectedTags([...selectedTags, tag]);
        }
    };
    const handleDeleteTag = async (tagId: string) => {
        setTags(tags.filter((tag) => tag.id !== tagId));
        try {
            const response = await deleteTag(tagId);

            toast({
                title: "Deleted tag",
                description: "The tag is deleted.",
            });

            await saveActivityLogsNotification({
                userId: undefined,
                description: `Updated a tag | ${response?.name}`,
                productId: "",
            });

            router.refresh();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Could not delete tag",
            });
        }
    };

    return (
        <AlertDialog>
            <Command className="bg-transparent">
                {!!selectedTags.length && (
                    <div className="flex flex-wrap gap-2 p-2 bg-background border rounded-md">
                        {selectedTags.map((tag) => (
                            <div key={tag.id} className="flex items-center">
                                <TagComponent title={tag.name} colorName={tag.color} />
                                <X size={14} className="text-muted-foreground cursor-pointer" onClick={() => handleDeleteSelection(tag.id)} />
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex items-center gap-2 my-2">
                    {TagColors.map((colorName) => (
                        <TagComponent key={colorName} selectedColor={selectedColor} setSelectedColor={setSelectedColor} title="" colorName={colorName} />
                    ))}
                </div>
                <div className="relative">
                    <CommandInput placeholder="Search for tag..." value={value} onValueChange={setValue} />
                    <PlusCircleIcon onClick={handleAddTag} size={20} className="absolute top-1/2 transform -translate-y-1/2 right-2 hover:text-primary transition-all cursor-pointer text-muted-foreground" />
                </div>
                <CommandList>
                    <CommandSeparator />
                    <CommandGroup heading="Tags">
                        {tags.map((tag) => (
                            <CommandItem key={tag.id} className="hover:!bg-secondary !bg-transparent flex items-center justify-between !font-light cursor-pointer">
                                <div onClick={() => handleAddSelections(tag)}>
                                    <TagComponent title={tag.name} colorName={tag.color} />
                                </div>

                                <AlertDialogTrigger>
                                    <TrashIcon size={16} className="cursor-pointer text-muted-foreground hover:text-rose-400  transition-all" />
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="text-left">Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription className="text-left">This action cannot be undone. This will permanently delete your the tag and remove it from our servers.</AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter className="items-center">
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction className="bg-destructive" onClick={() => handleDeleteTag(tag.id)}>
                                            Delete Tag
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </AlertDialog>
    );
};

export default TagCreator;