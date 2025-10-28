import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center">
      {/* Логотип */}
      <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center">
        <Image
          src="/icons/main_logo.png"
          alt="Main Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Білий текст під лого */}
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mt-8 px-4 max-w-3xl">
        ГНИЛИЙ ЛИМОН — безкарний слуга влади, який порушує Закон.
      </h1>
    </main>
  );
}