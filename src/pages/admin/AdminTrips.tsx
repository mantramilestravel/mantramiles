import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowDown, ArrowUp, Pencil, Plus, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { deletePackage, listAllPackages, setPublished, swapOrder, type AdminPackage } from "@/lib/adminApi";
import { importExistingTrips, pendingImports } from "@/lib/importExisting";

export default function AdminTrips() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: trips, isLoading, error } = useQuery({ queryKey: ["admin-packages"], queryFn: listAllPackages });

  const refresh = () => {
    queryClient.invalidateQueries({ queryKey: ["admin-packages"] });
    queryClient.invalidateQueries({ queryKey: ["packages"] });
  };
  const onError = (err: any) => toast({ title: "Something went wrong", description: err?.message, variant: "destructive" });

  const publish = useMutation({
    mutationFn: ({ id, published }: { id: string; published: boolean }) => setPublished(id, published),
    onSuccess: refresh,
    onError,
  });
  const remove = useMutation({ mutationFn: deletePackage, onSuccess: refresh, onError });
  const missing = useQuery({ queryKey: ["admin-missing-trips", trips?.length], queryFn: pendingImports, enabled: !!trips });
  const [importing, setImporting] = useState("");

  const runImport = async () => {
    try {
      const count = await importExistingTrips(setImporting);
      toast({ title: "Import finished", description: `${count} trip(s) copied into the admin.` });
      refresh();
    } catch (err: any) {
      onError(err);
    } finally {
      setImporting("");
    }
  };
  const move = useMutation({
    mutationFn: ({ a, b }: { a: AdminPackage; b: AdminPackage }) => swapOrder(a, b),
    onSuccess: refresh,
    onError,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trips</h1>
        <Button asChild>
          <Link to="/admin/trips/new">
            <Plus className="mr-2 h-4 w-4" /> Add trip
          </Link>
        </Button>
      </div>

      {missing.data && missing.data.missing.length + missing.data.needHero.length > 0 && (
        <Card className="border-amber-300 bg-amber-50">
          <CardContent className="flex flex-wrap items-center justify-between gap-4 py-4">
            <div className="text-sm">
              <div className="font-semibold">
                {missing.data.missing.length + missing.data.needHero.length} trip(s) on the website need importing into the admin
              </div>
              <div className="text-muted-foreground">
                {importing || "Copy them in (with photos, PDFs and their home page hero banner) so you can edit them here."}
              </div>
            </div>
            <Button onClick={runImport} disabled={!!importing}>
              {importing ? "Importing..." : "Import existing trips"}
            </Button>
          </CardContent>
        </Card>
      )}

      {isLoading && <p>Loading trips...</p>}
      {error && <p className="text-red-600">Could not load trips: {(error as Error).message}</p>}
      {trips?.length === 0 && (
        <p className="text-muted-foreground">No trips yet. Click "Add trip" to create the first one.</p>
      )}

      <div className="space-y-3">
        {trips?.map((trip, i) => (
          <Card key={trip.id}>
            <CardContent className="flex flex-wrap items-center gap-4 py-4">
              {trip.coverImage ? (
                <img src={trip.coverImage} alt="" className="h-16 w-24 rounded-md object-cover" />
              ) : (
                <div className="h-16 w-24 rounded-md bg-muted" />
              )}
              <div className="min-w-0 flex-1">
                <div className="truncate font-semibold">{trip.name}</div>
                <div className="truncate text-sm text-muted-foreground">
                  {trip.destinations} • {trip.duration}
                </div>
                <div className="mt-1 flex gap-2">
                  <Badge variant="secondary">{trip.type}</Badge>
                  {trip.showInHero && trip.heroImage && <Badge>In home page hero</Badge>}
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <Switch
                  checked={trip.published}
                  onCheckedChange={(published) => publish.mutate({ id: trip.id, published })}
                />
                {trip.published ? "Live" : "Hidden"}
              </label>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" disabled={i === 0} aria-label="Move up" onClick={() => move.mutate({ a: trip, b: trips[i - 1] })}>
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" disabled={i === trips.length - 1} aria-label="Move down" onClick={() => move.mutate({ a: trip, b: trips[i + 1] })}>
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/admin/trips/${trip.id}`}>
                    <Pencil className="mr-1 h-4 w-4" /> Edit
                  </Link>
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Delete">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete "{trip.name}"?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This removes the trip from the website permanently. To just hide it for now, use the Live switch instead.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => remove.mutate(trip.id)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
