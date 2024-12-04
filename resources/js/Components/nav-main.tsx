"use client";

import { Database, Home } from "lucide-react";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar";
import { Link } from "@inertiajs/react";

export function NavMain({}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={route().current("dashboard")}
                        >
                            <Link href={route("dashboard")}>
                                <Home />
                                <span>Home</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={route().current("articles*")}
                        >
                            <Link href={route("articles.index")}>
                                <Database />
                                <span>Article</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>{" "}
        </SidebarGroup>
    );
}
