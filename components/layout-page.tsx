"use client";
import { UserModel } from "@/lib/model/user-model";
import { setUser } from "@/lib/shared/slices/user-slice";
import { useAppDispatch } from "@/lib/shared/store";
import { ChildrenProps } from "@/lib/types";
import React from "react";

type LayoutPageProps = ChildrenProps & {
    user: UserModel;
};

const LayoutPage = ({ user, children }: LayoutPageProps) => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (user) {
            dispatch(setUser(user));
        }
    }, [user, dispatch]);

    return children;
};

export default LayoutPage;
