"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/StarRating";

type Props = {
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
  priceRange: string | null;
  setPriceRange: (value: string | null) => void;
  selectedRatings: number[];
  toggleRatingFilter: (rating: number) => void;
  clearFilters: () => void;
};

export default function FiltersSidebar({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedRatings,
  toggleRatingFilter,
  clearFilters,
}: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="font-medium text-lg mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {["Electronics", "Fashion", "Home & Decor", "Accessories"].map(
            (category) => (
              <div key={category} className="flex items-center">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategory === category}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCategory(category);
                    } else {
                      setSelectedCategory(null);
                    }
                  }}
                  className="mr-2"
                />
                <Label htmlFor={`category-${category}`}>{category}</Label>
              </div>
            )
          )}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <RadioGroup value={priceRange || ""} onValueChange={setPriceRange}>
          <div className="space-y-2">
            <div className="flex items-center">
              <RadioGroupItem value="under50" id="under50" />
              <Label htmlFor="under50" className="ml-2">
                Under $50
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="50to100" id="50to100" />
              <Label htmlFor="50to100" className="ml-2">
                $50 - $100
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="100to200" id="100to200" />
              <Label htmlFor="100to200" className="ml-2">
                $100 - $200
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="over200" id="over200" />
              <Label htmlFor="over200" className="ml-2">
                Over $200
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <div key={rating} className="flex items-center">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRatings.includes(rating)}
                onCheckedChange={() => toggleRatingFilter(rating)}
                className="mr-2"
              />
              <div className="flex items-center">
                <StarRating rating={rating} />
                <span className="ml-1">& up</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="link"
        onClick={clearFilters}
        className="text-blue-600 hover:text-blue-800 font-medium px-0"
      >
        Clear All Filters
      </Button>
    </div>
  );
}
