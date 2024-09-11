import SectionHeadline from "@/components/SectionHeadline";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllFacilityQuery } from "@/redux/feature/facility/facility.api";
import { TFacility } from "@/types";

const ManageFacility = () => {
  const { data: facilityData, isLoading } = useGetAllFacilityQuery(undefined);
  console.log(facilityData);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }
  return (
    <div>
      <SectionHeadline className="mt-4">Manage Facilities</SectionHeadline>
      <div className="flex items-center gap-2 justify-center mb-4">
        <h4 className="text-base font-medium">Add New facility</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-secondaryPink"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">#</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead>Hourly Rate</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Details</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facilityData?.data?.map((facility: TFacility) => (
            <TableRow>
              <TableCell>
                <img
                  className="size-16 object-cover rounded-xl"
                  src={facility?.img}
                  alt={facility?.name}
                />
              </TableCell>
              <TableCell className="font-medium">{facility?.name}</TableCell>
              <TableCell>${facility?.pricePerHour}</TableCell>
              <TableCell>{facility?.location}</TableCell>
              <TableCell>
                <p className="truncate w-24">{facility?.description}</p>
              </TableCell>
              <TableCell className="">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default ManageFacility;
