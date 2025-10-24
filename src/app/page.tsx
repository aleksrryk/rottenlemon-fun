import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/icons/main_logo.png"
          alt="Main Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </main>
  );
}