
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Search } from "lucide-react";

// Sample data for the table
const emissionSources = [
  {
    id: 1,
    source: "Electricity Consumption",
    category: "Scope 2",
    emissions: 65.4,
    unit: "tCO₂e",
    change: -5.2,
    status: "decreasing",
  },
  {
    id: 2,
    source: "Company Vehicles",
    category: "Scope 1",
    emissions: 42.8,
    unit: "tCO₂e",
    change: 2.1,
    status: "increasing",
  },
  {
    id: 3,
    source: "Business Travel",
    category: "Scope 3",
    emissions: 28.9,
    unit: "tCO₂e",
    change: -12.5,
    status: "decreasing",
  },
  {
    id: 4,
    source: "Purchased Goods",
    category: "Scope 3",
    emissions: 112.6,
    unit: "tCO₂e",
    change: 8.4,
    status: "increasing",
  },
  {
    id: 5,
    source: "Waste Generated",
    category: "Scope 3",
    emissions: 18.2,
    unit: "tCO₂e",
    change: -3.7,
    status: "decreasing",
  },
  {
    id: 6,
    source: "Natural Gas Heating",
    category: "Scope 1",
    emissions: 37.5,
    unit: "tCO₂e",
    change: 0.8,
    status: "stable",
  },
];

const EmissionsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(emissionSources);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === "") {
      setFilteredData(emissionSources);
    } else {
      const filtered = emissionSources.filter(
        (item) =>
          item.source.toLowerCase().includes(term.toLowerCase()) ||
          item.category.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <Card className="shadow-soft animate-scale-in animation-delay-200">
      <CardHeader className="px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-semibold">Emission Sources</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Breakdown of all emission sources by category
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search sources..."
                className="pl-8 w-full md:w-[250px]"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span className="hidden md:inline">Export</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <div className="rounded-md border-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-6">Source</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Emissions</TableHead>
                <TableHead className="text-right pr-6">Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TableRow
                    key={item.id}
                    className="hover:bg-muted/30 transition-colors duration-200"
                  >
                    <TableCell className="font-medium pl-6">{item.source}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`px-2.5 py-0.5 ${
                          item.category === "Scope 1"
                            ? "bg-teal-100 text-teal-800 border-teal-200"
                            : item.category === "Scope 2"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-orange-100 text-orange-800 border-orange-200"
                        }`}
                      >
                        {item.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {item.emissions} {item.unit}
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div
                        className={`inline-flex items-center ${
                          item.status === "decreasing"
                            ? "text-green-600"
                            : item.status === "increasing"
                            ? "text-red-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {item.status === "decreasing" ? (
                          "↓"
                        ) : item.status === "increasing" ? (
                          "↑"
                        ) : (
                          "→"
                        )}{" "}
                        {Math.abs(item.change)}%
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                    No emission sources found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{filteredData.length}</span> of{" "}
            <span className="font-medium">{emissionSources.length}</span> sources
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <span>View All</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmissionsTable;
