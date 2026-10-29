import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUploadField } from "@/components/admin/FileUploadField";
import { ListField } from "@/components/admin/ListField";
import type { PackageVariant } from "@/types/package";

type Props = {
  folder: string;
  value: PackageVariant[];
  onChange: (next: PackageVariant[]) => void;
};

const blankVariant = (id: number): PackageVariant => ({
  id,
  tag: "",
  name: "",
  subtitle: "",
  price: "Contact us for best rate",
  pdf: "",
  inclusions: [],
  exclusions: [],
  terms: [],
});

// Optional sub-packages (e.g. Flight vs Train) that each have their own price, PDF and lists.
export function VariantsEditor({ folder, value, onChange }: Props) {
  const update = (index: number, patch: Partial<PackageVariant>) =>
    onChange(value.map((v, i) => (i === index ? { ...v, ...patch } : v)));

  const add = () => onChange([...value, blankVariant(Math.max(0, ...value.map((v) => v.id)) + 1)]);

  return (
    <div className="space-y-4">
      {value.map((v, i) => (
        <Card key={v.id}>
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Option {i + 1}</h4>
              <Button type="button" variant="ghost" size="sm" onClick={() => onChange(value.filter((_, j) => j !== i))}>
                <Trash2 className="mr-1 h-4 w-4" /> Remove
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Badge (e.g. Flight Package)</Label>
                <Input value={v.tag} onChange={(e) => update(i, { tag: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label>Price</Label>
                <Input value={v.price} onChange={(e) => update(i, { price: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label>Name</Label>
                <Input value={v.name} onChange={(e) => update(i, { name: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label>Subtitle</Label>
                <Input value={v.subtitle} onChange={(e) => update(i, { subtitle: e.target.value })} />
              </div>
            </div>
            <FileUploadField
              label="Itinerary PDF for this option"
              kind="pdf"
              folder={folder}
              value={v.pdf ? [v.pdf] : []}
              onChange={(urls) => update(i, { pdf: urls[0] ?? "" })}
            />
            <div className="grid gap-4 md:grid-cols-3">
              <ListField label="Inclusions" value={v.inclusions} onChange={(x) => update(i, { inclusions: x })} />
              <ListField label="Exclusions" value={v.exclusions} onChange={(x) => update(i, { exclusions: x })} />
              <ListField label="Terms" value={v.terms} onChange={(x) => update(i, { terms: x })} />
            </div>
          </CardContent>
        </Card>
      ))}
      <Button type="button" variant="outline" onClick={add}>
        <Plus className="mr-2 h-4 w-4" /> Add an option
      </Button>
    </div>
  );
}
