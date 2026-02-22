import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-sm font-medium text-sky uppercase tracking-widest">
        404 error
      </span>

      <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
        Deze pagina bestaat niet
      </h1>

      <p className="mt-4 max-w-md text-muted-foreground">
        De pagina die je zoekt is verplaatst, verwijderd of heeft nooit bestaan.
        Geen zorgen — we helpen je graag weer op weg.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-sky px-5 py-2.5 text-sm font-medium text-white hover:bg-sky/90 transition"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
