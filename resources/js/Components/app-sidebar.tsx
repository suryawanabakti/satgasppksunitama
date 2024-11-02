import {
    Folder,
    GalleryVerticalEnd,
    Home,
    HomeIcon,
    LayoutDashboard,
    User,
} from "lucide-react";
import * as React from "react";

import { NavMaster } from "@/Components/nav-master";
import { NavUser } from "@/Components/nav-user";
import { TeamSwitcher } from "@/Components/team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/Components/ui/sidebar";
import { NavMain } from "./nav-main";
import { usePage } from "@inertiajs/react";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = usePage().props.auth.user;
    const data = {
        user: {
            name: user.name,
            email: user.email,
            avatar: "/avatars/shadcn.jpg",
        },
        teams: [
            {
                name: "Square Dev",
                logo: GalleryVerticalEnd,
                plan: "Super Admin",
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
                        name: "users",
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
                <NavMain />
                <NavMaster items={data.navMaster} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
