import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/helpers/icons";
import { LockIcon, LogInIcon, MailIcon } from "lucide-react";
import Link from "next/link";

type SignInProps = {

};

const SignIn = (props: SignInProps): React.ReactElement => {
    return (
        <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
                Sign in
            </h1>
            <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                    <Button
                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-7 bg-indigo-100 text-gray-800  hover:text-white  flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div className="bg-white p-1 rounded-full mx-4">
                            <Icons.google />
                        </div>
                        Sign In with Google
                    </Button>

                    <Button
                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-7 bg-indigo-100 text-gray-800 transition-all duration-300 ease-in-out focus:outline-none hover:shadow  hover:text-white focus:shadow-sm focus:shadow-outline mt-5">
                        <div className="bg-white p-1 rounded-full mx-4">
                            <Icons.gitHub />
                        </div>
                        Sign In with GitHub
                    </Button>
                </div>

                <div className="my-12 border-b text-center">
                    <div
                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                        Or sign in with e-mail
                    </div>
                </div>

                <div className="mx-auto max-w-xs">
                    <div className="relative">
                        <MailIcon className="absolute left-2.5 top-4 text-slate-400 w-4 h-5" />
                        <Input
                            className="w-full px-8 py-6 rounded-lg font-medium placeholder-gray-500 text-sm focus:bg-white"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="relative">
                        <LockIcon className="absolute left-2.5 top-4 text-slate-400 w-4 h-5" />
                        <Input
                            className="w-full px-8 py-6 rounded-lg font-medium placeholder-gray-500 text-sm focus:bg-white mt-5"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <Button className="mt-5 w-full">
                        <LogInIcon className="w-5 h-5" />
                        <span className="ml-3">
                            Sign In
                        </span>
                    </Button>
                </div>
                <hr className="my-6 border-t" />
                <div className="text-center">
                    <Button variant="link" className="hover:no-underline cursor-default">
                        Dont't have a account?
                        <Link className="hover:underline mx-1" href='/sign-up'>Sign Up</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;