import { Loader } from "lucide-react"


export default function AdminLoading() {
    return (
        <div className=" w-full  h-screen flex items-center justify-center gap-x-4">
            <p className="text-5xl">
                Loading...
            </p>
            <Loader className="animate-spin size-32  " />
        </div>
    )
}