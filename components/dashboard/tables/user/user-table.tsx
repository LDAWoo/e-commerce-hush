"use client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useModal } from "@/provider/modal-provider";
import { User } from "@prisma/client";
import { ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import * as React from "react";
import { columns } from "./columns";
import CustomModal from "@/components/global/custom-modal";
import UserDetails from "../../forms/user-details";

interface UserTableProps {
    data: User[];
}

const UserTable = ({ data }: UserTableProps) => {
    const { setOpen } = useModal();
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data,
        columns: [
            ...columns,
            {
                id: "actions",
                header: "Actions",
                cell: ({ row }) => {
                    const user = row.original;
                    return (
                        <div className="flex justify-center space-x-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                    setOpen(
                                        <CustomModal title="User Details" description="">
                                            <UserDetails id={user.id} userData={user} />
                                        </CustomModal>
                                    );
                                }}
                                className="h-8 w-8 p-0"
                            >
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                        <Trash className="h-4 w-4 text-red-500" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Confirm User Deletion</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Are you sure you want to delete the user account for {user.name} ({user.email})? This action cannot be undone. Deleting this account will:
                                            <ul className="list-disc list-inside mt-2">
                                                <li>Remove all personal information associated with this user</li>
                                                <li>Delete any content or data created by this user</li>
                                                <li>Revoke all access permissions for this user</li>
                                            </ul>
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction className="bg-red-900 hover:bg-red-800 text-white">Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    );
                },
            },
        ],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });

    return (
        <div className="bg-background p-3 rounded-md mb-3">
            <div className="flex items-center py-4">
                <Input placeholder="Filter users..." value={(table.getColumn("name")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)} className="max-w-sm" />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    Previous
                </Button>
                <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default UserTable;
