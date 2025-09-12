import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonRepoCard() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-14 bg-card rounded-md p-4 md:p-6 justify-between">
      <div className="flex flex-col gap-8">
        {/* Project Title and Description */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-8 items-center">
            <Skeleton className="h-8 w-[20ch] rounded-md" />
            <Skeleton className="h-6 w-[10ch] rounded-md" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-[50ch] max-w-full" />
            <Skeleton className="h-4 w-[49ch] max-w-full" />
            <Skeleton className="h-4 w-[48ch] max-w-full" />
            <Skeleton className="h-4 w-[49ch] max-w-full" />
          </div>
        </div>
        {/* Languages Used */}
        <div className="flex flex-col gap-3">
          <Skeleton className="h-6 w-[20ch]" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-[30px] w-[30px] rounded-md" />
            <Skeleton className="h-[30px] w-[30px] rounded-md" />
            <Skeleton className="h-[30px] w-[30px] rounded-md" />
            <Skeleton className="h-[30px] w-[30px] rounded-md" />
          </div>
        </div>
        {/* Links */}
        <div className="flex gap-4 mt-[-10px]">
          <Skeleton className="h-8 w-[15ch]" />
          <Skeleton className="h-8 w-[15ch]" />
        </div>
        {/* Last Updated At */}
        <Skeleton className="h-6 w-[22ch] mt-[-5px]" />
      </div>
      {/* Image Placeholder */}
      <Skeleton className="lg:h-full h-[250px] w-full max-w-full 2xl:max-w-[50%] rounded-md" />
    </div>
  );
}
