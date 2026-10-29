import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileUploadField } from "@/components/admin/FileUploadField";
import { ListField } from "@/components/admin/ListField";
import { VariantsEditor } from "@/components/admin/VariantsEditor";
import { useToast } from "@/hooks/use-toast";
import { getPackage, listAllPackages, savePackage, slugify, type AdminPackage } from "@/lib/adminApi";

const blankTrip = (sortOrder: number): AdminPackage => ({
  id: "",
  name: "",
  destinations: "",
  duration: "",
  description: "",
  price: "Contact us for best rate",
  Oldprice: "",
  rating: 4.5,
  type: "Domestic",
  tag: "",
  coverImage: "",
  images: [],
  pdf: "",
  highlights: [],
  inclusions: [],
  exclusions: [],
  terms: [],
  variants: [],
  itinerary: [],
  showInHero: false,
  heroImage: "",
  heroTitle: "",
  heroSubtitle: "",
  heroHighlight: "",
  heroCta: "Explore",
  published: true,
  sortOrder,
});

export default function AdminTripForm() {
  const { id } = useParams<{ id: string }>();
  const isNew = id === "new";
  const { data: trip, isLoading, error } = useQuery({
    queryKey: ["admin-package", id],
    queryFn: async () => {
      if (isNew) {
        const all = await listAllPackages();
        return blankTrip(Math.max(0, ...all.map((t) => t.sortOrder)) + 1);
      }
      return getPackage(id!);
    },
    staleTime: 0,
    gcTime: 0,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">Could not load this trip: {(error as Error).message}</p>;
  if (!trip) return <p>Trip not found.</p>;
  return <TripForm initial={trip} isNew={isNew} />;
}

function TripForm({ initial, isNew }: { initial: AdminPackage; isNew: boolean }) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [trip, setTrip] = useState<AdminPackage>(initial);
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof AdminPackage>(key: K, value: AdminPackage[K]) =>
    setTrip((t) => ({ ...t, [key]: value }));
  const text = (key: "name" | "destinations" | "duration" | "price" | "tag") => ({
    value: trip[key] ?? "",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => set(key, e.target.value),
  });

  const slug = isNew ? slugify(trip.name) : trip.id;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trip.name.trim() || !slug) {
      return toast({ title: "Please enter a trip name", variant: "destructive" });
    }
    if (trip.showInHero && !trip.heroImage) {
      return toast({ title: "Please add a hero photo, or switch off \"Show in home page hero\"", variant: "destructive" });
    }
    setSaving(true);
    try {
      if (isNew && (await getPackage(slug))) {
        throw new Error(`A trip with the web address "${slug}" already exists. Please change the name slightly.`);
      }
      await savePackage({ ...trip, id: slug });
      queryClient.invalidateQueries({ queryKey: ["admin-packages"] });
      queryClient.invalidateQueries({ queryKey: ["packages"] });
      toast({ title: "Saved", description: "The website will show the change within a few minutes." });
      navigate("/admin");
    } catch (err: any) {
      toast({ title: "Could not save", description: err?.message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" asChild>
          <Link to="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to trips
          </Link>
        </Button>
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save trip"}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isNew ? "Add a new trip" : `Edit: ${initial.name}`}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5 md:col-span-2">
              <Label>Trip name</Label>
              <Input required {...text("name")} />
              <p className="text-xs text-muted-foreground">
                Web address: /package/{slug || "..."}
                {!isNew && " (cannot be changed)"}
              </p>
            </div>
            <div className="space-y-1.5">
              <Label>Destinations</Label>
              <Input placeholder="Dubai • Abu Dhabi • Sharjah" {...text("destinations")} />
            </div>
            <div className="space-y-1.5">
              <Label>Duration</Label>
              <Input placeholder="6 Days / 5 Nights" {...text("duration")} />
            </div>
            <div className="space-y-1.5">
              <Label>Type</Label>
              <Select value={trip.type} onValueChange={(v) => set("type", v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Domestic">Domestic</SelectItem>
                  <SelectItem value="International">International</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Label shown on the card (optional)</Label>
              <Input placeholder="Pilgrimage" {...text("tag")} />
            </div>
            <div className="space-y-1.5">
              <Label>Price text</Label>
              <Input {...text("price")} />
            </div>
            <div className="space-y-1.5">
              <Label>Rating (0 to 5)</Label>
              <Input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={trip.rating}
                onChange={(e) => set("rating", Number(e.target.value))}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <Textarea rows={5} value={trip.description} onChange={(e) => set("description", e.target.value)} />
          </div>
          <label className="flex items-center gap-3">
            <Switch checked={trip.published} onCheckedChange={(v) => set("published", v)} />
            <span className="text-sm">{trip.published ? "Live on the website" : "Hidden from the website"}</span>
          </label>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Photos and itinerary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <FileUploadField
            label="Cover photo"
            hint="Shown on the home page card."
            kind="image"
            spec="cover"
            folder={slug}
            value={trip.coverImage ? [trip.coverImage] : []}
            onChange={(urls) => set("coverImage", urls[0] ?? "")}
          />
          <FileUploadField
            label="Gallery photos"
            hint="Shown on the trip page."
            kind="image"
            spec="gallery"
            multiple
            folder={slug}
            value={trip.images}
            onChange={(urls) => set("images", urls)}
          />
          <FileUploadField
            label="Itinerary PDF"
            kind="pdf"
            folder={slug}
            value={trip.pdf ? [trip.pdf] : []}
            onChange={(urls) => set("pdf", urls[0] ?? "")}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Home page hero banner</CardTitle>
          <p className="text-sm text-muted-foreground">
            Turn this on to show the trip as a slide in the large banner at the top of the home page. Slides follow the
            same order as Manage Trips, and the button opens this trip.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <label className="flex items-center gap-3">
            <Switch checked={!!trip.showInHero} onCheckedChange={(v) => set("showInHero", v)} />
            <span className="text-sm">{trip.showInHero ? "Shown in the hero banner" : "Not in the hero banner"}</span>
          </label>
          {trip.showInHero && (
            <>
              <FileUploadField
                label="Hero photo"
                kind="image"
                spec="hero"
                folder={slug}
                value={trip.heroImage ? [trip.heroImage] : []}
                onChange={(urls) => set("heroImage", urls[0] ?? "")}
              />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>Hero title</Label>
                  <Input
                    placeholder={trip.name || "Defaults to the trip name"}
                    value={trip.heroTitle ?? ""}
                    onChange={(e) => set("heroTitle", e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Small line above the title (optional)</Label>
                  <Input value={trip.heroHighlight ?? ""} onChange={(e) => set("heroHighlight", e.target.value)} />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <Label>Text under the title</Label>
                  <Input
                    placeholder="Defaults to the trip description"
                    value={trip.heroSubtitle ?? ""}
                    onChange={(e) => set("heroSubtitle", e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Button text</Label>
                  <Input value={trip.heroCta ?? ""} onChange={(e) => set("heroCta", e.target.value)} />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <ListField label="Inclusions" value={trip.inclusions ?? []} onChange={(v) => set("inclusions", v)} rows={10} />
          <ListField label="Exclusions" value={trip.exclusions ?? []} onChange={(v) => set("exclusions", v)} rows={10} />
          <ListField label="Terms" value={trip.terms ?? []} onChange={(v) => set("terms", v)} rows={10} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Package options (optional)</CardTitle>
          <p className="text-sm text-muted-foreground">
            Use this when one trip has several versions with their own price and PDF, such as Flight and Train. When
            options are added, they replace the inclusions, exclusions and terms above on the trip page.
          </p>
        </CardHeader>
        <CardContent>
          <VariantsEditor folder={slug} value={trip.variants ?? []} onChange={(v) => set("variants", v)} />
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={saving}>
          {saving ? "Saving..." : "Save trip"}
        </Button>
      </div>
    </form>
  );
}
