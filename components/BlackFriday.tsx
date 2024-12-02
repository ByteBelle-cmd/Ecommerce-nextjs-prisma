import { Button } from "./ui/button";

export default function BlackFriday() {
    return (
        <section className="w-full sm:w-[98%] xl:w-[80%] md:w-[92%] h-48 md:h-24 bg-black rounded-xl mx-auto mb-4 flex flex-col sm:flex-row items-center justify-center text-white gap-5 sm:gap-7">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 text-center sm:text-left items-center justify-center">
                <p className="text-xl sm:text-lg md:text-xl">Do the talking this Black Friday</p>
                <p className="text-2xl sm:text-xl md:text-2xl">50% off Premium plans</p>
            </div>
            <Button className="text-lg sm:text-base" variant="outline" size="lg">
                I&apos;m in
            </Button>
        </section>
    );
}
