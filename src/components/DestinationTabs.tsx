import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plane } from "lucide-react";
import { QuoteDialog } from "./QuoteDialog";

const domesticDestinations = [
	{ id: "goa", name: "Goa", tagline: "Sun, sand, and endless beaches", image: "🏖️" },
	{ id: "kerala", name: "Kerala", tagline: "God's own country", image: "🌴" },
	{ id: "rajasthan", name: "Rajasthan", tagline: "Land of kings and palaces", image: "🏰" },
	{ id: "himachal", name: "Himachal Pradesh", tagline: "Adventure in the mountains", image: "🏔️" },
	{ id: "agra", name: "Agra", tagline: "Home to the Taj Mahal", image: "🕌" },
	{ id: "kashmir", name: "Kashmir", tagline: "Paradise on earth", image: "🌸" },
	{ id: "mumbai", name: "Mumbai", tagline: "The city that never sleeps", image: "🌆" },
	{ id: "delhi", name: "Delhi", tagline: "Where history meets modernity", image: "🏛️" }
];

const internationalDestinations = [
	{ id: "maldives", name: "Maldives", tagline: "Tropical paradise awaits", image: "🏝️" },
	{ id: "switzerland", name: "Switzerland", tagline: "Alpine beauty and luxury", image: "🏔️" },
	{ id: "paris", name: "Paris", tagline: "The city of love and lights", image: "🗼" },
	{ id: "dubai", name: "Dubai", tagline: "Where dreams meet reality", image: "🏙️" },
	{ id: "thailand", name: "Thailand", tagline: "Land of smiles and temples", image: "🛕" },
	{ id: "italy", name: "Italy", tagline: "Art, history, and cuisine", image: "🍝" },
	{ id: "japan", name: "Japan", tagline: "Where tradition meets innovation", image: "🌸" },
	{ id: "bali", name: "Bali", tagline: "Island of gods and beaches", image: "🌺" }
];

interface DestinationTabsProps {
	onDestinationClick: (destination: string) => void;
}

export const DestinationTabs: React.FC<DestinationTabsProps> = ({ onDestinationClick }) => {
	const [activeTab, setActiveTab] = useState("domestic");

	const DestinationGrid = ({ destinations }: { destinations: typeof domesticDestinations }) => (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
			{destinations.map((destination) => (
				<Card
					key={destination.id}
					className="group overflow-hidden border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-card"
				>
					<CardContent className="p-6">
						<div className="text-center">
							<div className="text-4xl mb-4 group-hover:animate-float">
								{destination.image}
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
								{destination.name}
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								{destination.tagline}
							</p>
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="sm"
									className="flex-1"
									onClick={() => onDestinationClick(destination.id)}
								>
									Explore
								</Button>
								<QuoteDialog destination={destination.name}>
									<Button size="sm" className="flex-1">
										Get Quote
									</Button>
								</QuoteDialog>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);

	return (
		<section className="py-16 px-4 bg-secondary/30">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Discover Amazing Destinations
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						From breathtaking local gems to exotic international wonders,
						find your perfect getaway destination.
					</p>
				</div>

				<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
					<TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-background border border-border">
						<TabsTrigger
							value="domestic"
							className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
						>
							<MapPin className="h-4 w-4" />
							Domestic
						</TabsTrigger>
						<TabsTrigger
							value="international"
							className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
						>
							<Plane className="h-4 w-4" />
							International
						</TabsTrigger>
					</TabsList>

					<TabsContent value="domestic" className="animate-fade-in">
						<DestinationGrid destinations={domesticDestinations} />
					</TabsContent>

					<TabsContent value="international" className="animate-fade-in">
						<DestinationGrid destinations={internationalDestinations} />
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};