import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full grid lg:grid-cols-3">
      <div className="">
        <Image
          src="/woman-with-book.jpg"
          width={600}
          height={200}
          className="object-fill w-full h-full"
          alt="woman with book"
        />
      </div>
      <div className="basis-3/4 px-11 py-4 lg:py-0 flex items-center justify-start">
        <div className="space-y-4 flex flex-col items-start justify-start">
          <h1 className=" lg:text-7xl text-3xl font-semibold">
            We create an enabling environment that inspires.
          </h1>
          <p>
            Image from{" "}
            <Link
              className=" underline"
              target="_blank"
              href="Photo by Centre for Ageing Better: https://www.pexels.com/photo/laughing-woman-posing-on-chair-with-book-on-knee-17153163/"
            >
              Centre for Ageing Better{" "}
            </Link>{" "}
          </p>
          <button className=" bg-blue-500 text-white rounded-full px-4 py-2">
            Contact us
          </button>
        </div>
      </div>
    </main>
  );
}
