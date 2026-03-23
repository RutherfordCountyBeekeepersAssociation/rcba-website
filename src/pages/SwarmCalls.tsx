import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

// TODO: Replace with your published Google Sheet CSV URL
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTDv3wFDwseFj6mgU4j7zCu6IO8vpV1Cs_qanPII5UJAPPoYZv7rHEOQp4UEuOkNstglHCy0XLPPkxl/pub?output=csv";

function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let inQuotes = false;
  let row: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"' && text[i + 1] === '"') {
        current += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(current.trim());
        current = "";
      } else if (char === "\n" || (char === "\r" && text[i + 1] === "\n")) {
        row.push(current.trim());
        if (row.some((cell) => cell !== "")) rows.push(row);
        row = [];
        current = "";
        if (char === "\r") i++;
      } else {
        current += char;
      }
    }
  }
  row.push(current.trim());
  if (row.some((cell) => cell !== "")) rows.push(row);
  return rows;
}

const SwarmCalls = () => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!SHEET_CSV_URL) {
      setError("The swarm call list is not yet configured. Please check back soon.");
      setLoading(false);
      return;
    }

    fetch(SHEET_CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.text();
      })
      .then((text) => {
        const parsed = parseCSV(text);
        if (parsed.length > 0) {
          setHeaders(parsed[0]);
          setRows(parsed.slice(1));
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load the swarm call list. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            RCBA
          </Link>
          <Link to="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Swarm Call List
            </h1>
            <p className="text-xl text-muted-foreground">
              Need a swarm removed? Contact one of our experienced beekeepers below.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {loading && (
            <div className="space-y-3">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          )}

          {error && (
            <Alert className="max-w-lg mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {!loading && !error && rows.length > 0 && (
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/5">
                    {headers.map((header, i) => (
                      <TableHead key={i} className="font-semibold text-foreground">
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i}>
                      {row.map((cell, j) => (
                        <TableCell key={j}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {!loading && !error && rows.length === 0 && headers.length === 0 && !SHEET_CSV_URL && null}
        </div>
      </main>
    </div>
  );
};

export default SwarmCalls;
