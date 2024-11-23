"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import { AlignLeft, AlignCenter, Bold, Italic, List, Redo, Underline, Undo } from "lucide-react";
import { Toggle } from "./toggle";

interface RichTextEditorProps {
    onChange: (content: string) => void;
    initialContent?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onChange, initialContent = "" }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState(initialContent);
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.innerHTML = content;
        }
    }, [content]);

    const handleChange = () => {
        const newContent = editorRef.current?.innerHTML || "";
        setContent(newContent);
        onChange(newContent);
        updateUndoRedoState();
    };

    const execCommand = (command: string, value: string | undefined = undefined) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
        handleChange(); // Ensure state is updated after command execution
    };

    const updateUndoRedoState = () => {
        setCanUndo(document.queryCommandEnabled("undo"));
        setCanRedo(document.queryCommandEnabled("redo"));
    };

    const handleBold = () => execCommand("bold");
    const handleItalic = () => execCommand("italic");
    const handleUnderline = () => execCommand("underline");
    const handleAlignLeft = () => execCommand("justifyLeft");
    const handleAlignCenter = () => execCommand("justifyCenter");
    const handleList = () => execCommand("insertUnorderedList");
    const handleUndo = () => {
        execCommand("undo");
        updateUndoRedoState();
    };
    const handleRedo = () => {
        execCommand("redo");
        updateUndoRedoState();
    };

    return (
        <div className="border rounded-md">
            <div className="flex gap-2 p-2 border-b border-gray-300">
                <Toggle size={"sm"} pressed={document.queryCommandState("bold")} onPressedChange={handleBold}>
                    <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle size={"sm"} pressed={document.queryCommandState("italic")} onPressedChange={handleItalic}>
                    <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle size={"sm"} pressed={document.queryCommandState("underline")} onPressedChange={handleUnderline}>
                    <Underline className="h-4 w-4" />
                </Toggle>

                <Toggle size="sm" pressed={document.queryCommandState("justifyLeft")} onPressedChange={handleAlignLeft}>
                    <AlignLeft className="h-4 w-4" />
                </Toggle>
                <Toggle size="sm" pressed={document.queryCommandState("justifyCenter")} onPressedChange={handleAlignCenter}>
                    <AlignCenter className="h-4 w-4" />
                </Toggle>
                <Toggle size="sm" pressed={document.queryCommandState("insertUnorderedList")} onPressedChange={handleList}>
                    <List className="h-4 w-4" />
                </Toggle>
                <div className="flex-grow"></div>
                <Button variant="ghost" size="sm" className="rounded-none" onClick={handleUndo} disabled={!canUndo}>
                    <Undo className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-none" onClick={handleRedo} disabled={!canRedo}>
                    <Redo className="h-4 w-4" />
                </Button>
            </div>
            <div
                ref={editorRef}
                contentEditable
                className="p-4 min-h-[122px] max-h-[200px] overflow-y-scroll focus:outline-none"
                onInput={handleChange}
                onKeyDown={(e) => {
                    if (e.key === "z" && (e.ctrlKey || e.metaKey)) {
                        e.preventDefault();
                        handleUndo();
                    }
                    if (e.key === "y" && (e.ctrlKey || e.metaKey)) {
                        e.preventDefault();
                        handleRedo();
                    }
                }}
            />
        </div>
    );
};

export { RichTextEditor };
