"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function SearchBar({ value, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Search products..."
        className="pl-10 pr-4 py-2 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    </form>
  );
}
