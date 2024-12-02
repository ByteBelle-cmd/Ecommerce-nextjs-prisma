import { Nav, NavLink } from "@/components/Nav";
import { authorizeAdmin } from "../(auth)/actions/authActions";
import { Role } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    try {
        // Call the authorizeAdmin function to check authorization
        const role = await authorizeAdmin(); // This should either return the user or throw an error
        console.log(role, "user?.role");

        // If no error is thrown, check if the user's role is 'ADMIN'
        if (role === Role.ADMIN) {
            return (
                <div className="flex min-h-screen bg-zinc-100 ">
                    {/* Sidebar */}

                    <Nav>
                        <NavLink href="/admin" className="block py-2 px-4 text-lg font-semibold text-zinc-700 hover:bg-zinc-200">
                            Dashboard
                        </NavLink>
                        <NavLink href="/admin/products" className="block py-2 px-4 text-lg font-semibold text-zinc-700 hover:bg-zinc-200">
                            Products
                        </NavLink>
                        <NavLink href="/admin/users" className="block py-2 px-4 text-lg font-semibold text-zinc-700 hover:bg-zinc-200">
                            Customers
                        </NavLink>
                        <NavLink href="/admin/orders" className="block py-2 px-4 text-lg font-semibold text-zinc-700 hover:bg-zinc-200">
                            Sales
                        </NavLink>
                    </Nav>


                    {/* Main Content */}
                    <div className="flex-1 p-6 overflow-auto bg-zinc-50">
                        {children}
                    </div>
                </div>
            );
        } else {
            // If the user is not an admin, show unauthorized message
            return (
                <div className="flex justify-center items-center min-h-screen bg-zinc-100">
                    <div className="text-center text-xl font-bold text-red-600">
                        Unauthorized
                    </div>
                </div>
            );
        }
    } catch (error) {
        // If authorizeAdmin throws an error, it means user is not authorized
        console.error(error);
        return (
            <div className="flex justify-center items-center min-h-screen bg-zinc-100">
                <div className="text-center text-xl font-bold text-red-600">
                    Unauthorized
                </div>
            </div>
        );
    }
}
