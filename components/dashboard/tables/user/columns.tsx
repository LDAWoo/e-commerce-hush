import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Role, User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { UserIcon } from "lucide-react";

const roleColors: Record<Role, string> = {
    CUSTOMER: "bg-blue-100 text-blue-800",
    SUPPORT_STAFF: "bg-green-100 text-green-800",
    ADMIN: "bg-red-100 text-red-800",
    SUPPLIER: "bg-yellow-100 text-yellow-800",
    ORDER_MANAGER: "bg-purple-100 text-purple-800",
    WAREHOUSE_STAFF: "bg-indigo-100 text-indigo-800",
    CONTENT_MANAGER: "bg-pink-100 text-pink-800",
    FINANCIAL_MANAGER: "bg-orange-100 text-orange-800",
};

export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => <Checkbox checked={table.getIsAllPageRowsSelected()} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />,
        cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
    },
    {
        accessorKey: "avatarUrl",
        header: "Avatar",
        cell: ({ row }) => (
            <Avatar>
                <AvatarImage src={row.original.avatarUrl} alt="Avatar" />
                <AvatarFallback>
                    <UserIcon size={18} />
                </AvatarFallback>
            </Avatar>
        ),
    },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => {
            const role = row.original.role as Role;
            return <span className={cn("px-2 py-1 rounded-md text-xs font-medium", roleColors[role])}>{role}</span>;
        },
    },
    {
        accessorKey: "isActive",
        header: "Active",
        cell: ({ row }) => <span className={`px-2 py-1 rounded-md text-xs font-medium ${row.original.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{row.original.isActive ? "Active" : "Inactive"}</span>,
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => <div className={cn("w-full", row.original.phone ? "text-left" : "text-center")}>{row.original.phone || "-"}</div>,
    },
    {
        accessorKey: "address",
        header: "Address",
        cell: ({ row }) => <div className={cn("w-full", row.original.address ? "text-left" : "text-center")}>{row.original.address || "-"}</div>,
    },
    {
        accessorKey: "country",
        header: "Country",
        cell: ({ row }) => <div className={cn("w-full", row.original.country ? "text-left" : "text-center")}>{row.original.country || "-"}</div>,
    },
    {
        accessorKey: "createdAt",
        header: "Created",
        cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
    },
    {
        accessorKey: "updatedAt",
        header: "Updated",
        cell: ({ row }) => new Date(row.original.updatedAt).toLocaleDateString(),
    },
];
