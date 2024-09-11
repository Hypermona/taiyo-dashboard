import ComponentError from "@/components/ComponentError";
import LineChart from "@/components/DiseaseLineChart";
import LoadingComponent from "@/components/LoadingComponet";
import WorldMap from "@/components/WorldMap";
import diseaseDataService from "@/services/diseaseDataService";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

function ChartsAndMaps() {
  const {
    isPending: isPendingHistory,
    isError: isHistoryDataError,
    error: historyDataError,
    data: historyData,
  } = useQuery({
    queryKey: ["historicalData"],
    queryFn: diseaseDataService.fetchHistoricalData,
  });
  const {
    isPending: isPendingCountryWise,
    isError: isCountryWiseDataError,
    error: countryWiseError,
    data: CountryWiseData,
  } = useQuery({
    queryKey: ["countryWiseData"],
    queryFn: diseaseDataService.fetchCountryWiseData,
  });

  if (isHistoryDataError) {
    toast(historyDataError?.message);
  }
  if (isCountryWiseDataError) {
    toast(countryWiseError?.message);
  }

  return (
    <div>
      {isHistoryDataError && <ComponentError />}
      {isPendingHistory && <LoadingComponent />}
      {!isPendingHistory && !isHistoryDataError && <LineChart chartData={historyData!} />}
      {isCountryWiseDataError && <ComponentError />}
      {isPendingCountryWise && <LoadingComponent />}
      {!isPendingCountryWise && !isCountryWiseDataError && <WorldMap mapData={CountryWiseData!} />}
    </div>
  );
}

export default ChartsAndMaps;
