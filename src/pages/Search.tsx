import { useStations } from "@/context/stationContext";
import { Situation } from "@/types/mainStationTypes";
import { useEffect, useRef, useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<Situation | null>(null);
  const { stations } = useStations();

  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = () => {
    const result = stations.find((station) => station.id === searchTerm);
    if (result) {
      setSearchResult(result);
      setError(null);
    } else {
      setSearchResult(null);
      setError("No station found with that ID");
    }
    setSearchTerm("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <h1>Search Vehicle</h1>
      <input
        type="text"
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter station ID"
        className="search-input"
        inputMode="numeric"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div className="error">{error}</div>}
      {searchResult && (
        <div className="result">
          <h2>Vehicle Found</h2>
          <p>ID: {searchResult.id}</p>
          <p>Station: {searchResult.station}</p>
          <p>Manual: {searchResult.manual}</p>
          <p>Auto: {searchResult.auto}</p>
          <p>Class One: {searchResult.classOne}</p>
          <p>Class Two: {searchResult.classTwo}</p>
          <p>Fault: {searchResult.fault}</p>
          <p>Case: {searchResult.case}</p>
        </div>
      )}
    </div>
  );
}
