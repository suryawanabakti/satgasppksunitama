import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { ChartArea, Cog, SatelliteDishIcon, Users } from "lucide-react";

export default function Dashboard() {
    const data = {
        breadCrumb: [
            {
                label: "Home",
                link: "/dashboard",
            },
        ],
    };

    const cardData = [
        {
            title: "Informasi 1",
            description: "Deskripsi singkat untuk informasi pertama.",
            icon: <Users />,
        },
        {
            title: "Informasi 2",
            description: "Deskripsi singkat untuk informasi kedua.",
            icon: <ChartArea />,
        },
        {
            title: "Informasi 3",
            description: "Deskripsi singkat untuk informasi ketiga.",
            icon: <SatelliteDishIcon />,
        },
        {
            title: "Informasi 4",
            description: "Deskripsi singkat untuk informasi keempat.",
            icon: <Cog />,
        },
    ];
    return (
        <AuthenticatedLayout breadCrumb={data.breadCrumb}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {cardData.map((card, index) => (
                        <Card key={index} className="flex items-center p-4">
                            <div className="text-2xl mr-4">{card.icon}</div>
                            <div>
                                <CardTitle>{card.title}</CardTitle>
                                <CardDescription>
                                    {card.description}
                                </CardDescription>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
