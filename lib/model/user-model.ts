export interface UserModel {
    id?: string | null;
    name?: string | null;
    image?: string | null;
    userId?: string;
    email?: string | null;
    gender?: string;
    dateOfBirth?: string;
    fullName?: string;
    phoneNumber?: string;
    address?: string;
    isDeleted?: boolean;
    jwtToken?: any;
    roles?: Role[];
    permissions?: Permission[];
    permissionGroups?: PermissionGroupModel[];
}

export interface Role {
    roleId: string;
    roleName: string;
    roleCode: string;
    isDeleted: boolean;
    permissions: any;
}

export interface Permission {
    permissionId: string;
    permissionCode: string;
    isDeleted: boolean;
    description: string;
}

export interface PermissionGroupModel {
    permissionGroupId: string;
    permissionGroupName: string;
    isDeleted: boolean;
    description: string;
    permissions: any;
}
