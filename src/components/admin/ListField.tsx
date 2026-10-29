import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  label: string;
  hint?: string;
  value: string[];
  onChange: (next: string[]) => void;
  rows?: number;
};

// One item per line. Blank lines are dropped on blur so typing a new line stays natural.
export function ListField({ label, hint, value, onChange, rows = 6 }: Props) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Textarea
        rows={rows}
        defaultValue={value.join("\n")}
        onChange={(e) => onChange(e.target.value.split("\n"))}
        onBlur={(e) => onChange(e.target.value.split("\n").map((s) => s.trim()).filter(Boolean))}
      />
      <p className="text-xs text-muted-foreground">{hint ?? "Type one item per line."}</p>
    </div>
  );
}
