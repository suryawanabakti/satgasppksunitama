import { Folder, GalleryVerticalEnd } from "lucide-react";
import * as React from "react";

import { NavMaster } from "@/Components/nav-master";
import { NavUser } from "@/Components/nav-user";
import { TeamSwitcher } from "@/Components/team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/Components/ui/sidebar";
import { usePage } from "@inertiajs/react";
import { NavMain } from "./nav-main";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = usePage().props.auth.user;
    const data = {
        user: {
            name: user.name,
            username: user.username,
            avatar: "/avatars/shadcn.jpg",
        },
        teams: [
            {
                name: "UNITAMA",
                logo: GalleryVerticalEnd,
                plan: "Satgas PPKS",
            },
        ],
        navMaster: [
            {
                title: "Master Data",
                url: "#",
                icon: Folder,
                isActive: true,
                items: [
                    {
                        title: "Users",
                        url: "/users",
                        name: "users*",
                    },
                ],
            },
        ],
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain user={user} />
                {user.role == "SATGAS PPKS" && (
                    <NavMaster user={user} items={data.navMaster} />
                )}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
