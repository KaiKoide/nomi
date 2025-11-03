export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Nomi</h1>
          <p className="text-lg text-gray-500">
            サブリクションを、もっと賢く。
          </p>
        </div>
      </main>
    </div>
  );
}
