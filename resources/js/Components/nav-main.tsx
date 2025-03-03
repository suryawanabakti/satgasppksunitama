"use client";

import { Database, File, Home, Info } from "lucide-react";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar";
import { Link } from "@inertiajs/react";

export function NavMain({ user }: any) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
                {user.role == "SATGAS PPKS" && (
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
                                isActive={route().current("admin-laporan*")}
                            >
                                <Link href={route("admin-laporan.index")}>
                                    <File />
                                    <span>Laporan</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                )}
                {user.role == "REKTOR" && (
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
                                isActive={route().current("rektor-laporan*")}
                            >
                                <Link href={route("rektor-laporan.index")}>
                                    <File />
                                    <span>Laporan</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                )}
                {user.role == "USER" && (
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={route().current("dashboard-user")}
                            >
                                <Link href={route("dashboard-user")}>
                                    <Home />
                                    <span>Home</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={route().current("user-laporan*")}
                            >
                                <Link href={route("user-laporan.index")}>
                                    <File />
                                    <span>Laporan</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={route().current("user-informasi*")}
                            >
                                <Link href={route("user-informasi.index")}>
                                    <Info />
                                    <span>Informasi</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                )}
            </SidebarGroupContent>{" "}
        </SidebarGroup>
    );
}
