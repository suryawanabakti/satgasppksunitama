import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <img
                        src="/lambang.png"
                        className="h-20 w-20 fill-current text-gray-500"
                    />
                </Link>
            </div>
            <h4 className="text-xl text-center mt-3 font-bold">
                SATGAS PPKS UNITAMA
            </h4>
            <div className="mt-6 w-full overflow-hidden  px-6 py-1  sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
