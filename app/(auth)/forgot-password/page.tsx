import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/helpers/icons";
import { LockIcon, LogInIcon, MailIcon, SendIcon } from "lucide-react";
import Link from "next/link";

type ForgotPasswordProps = {

};

const ForgotPassword = (props: ForgotPasswordProps): React.ReactElement => {
    return (
        <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
                Forgot Password
            </h1>
            <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                    <div className="relative">
                        <MailIcon className="absolute left-2.5 top-4 text-slate-400 w-4 h-5" />
                        <Input
                            className="w-full px-8 py-6 rounded-lg font-medium placeholder-gray-500 text-sm focus:bg-white"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <Button className="mt-5 w-full">
                        <SendIcon absoluteStrokeWidth className="w-5 h-5" />
                        <span className="ml-3">
                            Send Reset Mail
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

export default ForgotPassword;