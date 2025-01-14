import Image from "next/image";
import LogoImg from '@/public/logo.svg';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="auth-layout">
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex items-center justify-center flex-col">
                        <div>
                            <Image
                                width={300}
                                height={300}
                                src={LogoImg}
                                className="w-32 mx-auto" alt={""} />
                        </div>
                        {children}
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ "backgroundImage": "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
