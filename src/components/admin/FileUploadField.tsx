import { useRef, useState } from "react";
import { FileText, Info, Loader2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { uploadMedia } from "@/lib/adminApi";

// Recommended sizes, based on how each image is displayed on the website.
export const IMAGE_SPECS = {
  cover: {
    size: "1200 × 800 px (3:2 landscape)",
    tip: "Shown on the home page trip card. The edges may be trimmed, so keep the main subject in the middle.",
  },
  gallery: {
    size: "1200 × 900 px (4:3 landscape)",
    tip: "Shown three across on the trip page and full size when clicked. Use the same size for every gallery photo so they line up.",
  },
  hero: {
    size: "1920 × 1080 px (16:9 landscape)",
    tip: "Fills the whole home page banner, and the text sits in the centre. Choose a photo that stays clear behind text, and keep the subject in the middle so it still works on phones.",
  },
} as const;

const FILE_NOTE = {
  image: "JPG, PNG or WebP, ideally under 2 MB so the site loads fast.",
  pdf: "PDF, ideally under 10 MB.",
};

type Props = {
  spec?: keyof typeof IMAGE_SPECS;
  label: string;
  hint?: string;
  folder: string;
  kind: "image" | "pdf";
  multiple?: boolean;
  value: string[];
  onChange: (next: string[]) => void;
};

export function FileUploadField({ label, hint, spec, folder, kind, multiple, value, onChange }: Props) {
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    try {
      const urls: string[] = [];
      for (const file of Array.from(files)) urls.push(await uploadMedia(folder, file));
      onChange(multiple ? [...value, ...urls] : urls);
    } catch (err: any) {
      toast({ title: "Upload failed", description: err?.message ?? "Please try again.", variant: "destructive" });
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const remove = (url: string) => onChange(value.filter((v) => v !== url));

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-3">
        {value.map((url) => (
          <div key={url} className="relative">
            {kind === "image" ? (
              <img src={url} alt="" className="h-24 w-32 rounded-md border object-cover" />
            ) : (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex h-24 w-40 flex-col items-center justify-center gap-1 rounded-md border bg-muted text-xs"
              >
                <FileText className="h-6 w-6" />
                View PDF
              </a>
            )}
            <button
              type="button"
              onClick={() => remove(url)}
              className="absolute -right-2 -top-2 rounded-full bg-red-600 p-1 text-white"
              aria-label="Remove"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
      <input
        ref={inputRef}
        type="file"
        hidden
        multiple={multiple}
        accept={kind === "image" ? "image/*" : "application/pdf"}
        onChange={(e) => handleFiles(e.target.files)}
      />
      <Button type="button" variant="outline" size="sm" disabled={busy} onClick={() => inputRef.current?.click()}>
        {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
        {busy ? "Uploading..." : multiple ? "Add files" : value.length ? "Replace" : "Upload"}
      </Button>
      <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
        {spec ? (
          <>
            <span>
              <span className="font-medium text-foreground">Recommended size: {IMAGE_SPECS[spec].size}.</span>{" "}
              {FILE_NOTE.image}
            </span>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" aria-label="Image size help" className="mt-0.5 shrink-0">
                  <Info className="h-3.5 w-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">{IMAGE_SPECS[spec].tip}</TooltipContent>
            </Tooltip>
          </>
        ) : (
          FILE_NOTE[kind]
        )}
      </p>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
