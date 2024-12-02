'use client'
import { emailOrderHistory } from "@/actions/orders";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react"
interface ErrorType {
    email?: string;
    message?: string;
}

export default function MyOrdersPage() {
    const ActionFunction = async (state: ErrorType) => {
        // Use FormData directly from the form
        const formdata = new FormData(document.querySelector("form") as HTMLFormElement);
        if (!formdata) {
            return state;
        }
        // const email = formdata.get("email")?.toString() || "";
        return await emailOrderHistory(state, formdata); // Corrected here
    };

    const [error, action, isPending] = useActionState<ErrorType>(ActionFunction, {});

    return (
        <form
            action={action}
            className="min-h-screen flex items-center justify-center px-4"
        >
            <Card className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 space-y-4">
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-2xl font-bold text-zinc-900">My Orders</CardTitle>
                    <CardDescription className="text-zinc-600">
                        Enter your email and we will email you your order history and download
                        links
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Label htmlFor="email" className="text-zinc-700">
                            Email
                        </Label>
                        <Input
                            type="email"
                            required
                            name="email"
                            id="email"
                            className="w-full"
                        />
                        {error?.email && (
                            <div className="text-destructive text-sm">{error.email}</div>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-2">
                    {error?.message ? (
                        <p className="text-sm text-zinc-600">{error.message}</p>
                    ) : (
                        <SubmitButton isPending={isPending} />
                    )}
                </CardFooter>
            </Card>
        </form>
    );
}

function SubmitButton({ isPending }: { isPending: boolean }) {
    return (
        <Button
            className="w-full text-white bg-zinc-900 hover:bg-zinc-800"
            size="lg"
            disabled={isPending}
            type="submit"
        >
            {isPending ? "Sending..." : "Send"}
        </Button>
    );
}
