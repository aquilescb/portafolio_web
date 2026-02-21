import { Skeleton } from "../../../../shared/ui/feedback/Skeleton";
import { Card } from "../../../../shared/ui/primitives/Card";

export function ProjectsGridSkeleton() {
   return (
      <section className="space-y-8">
         <div>
            <Skeleton className="h-7 w-40" />
            <Skeleton className="mt-3 h-4 w-80" />
         </div>

         <Card className="space-y-4 p-4">
            <Skeleton className="h-10 w-full" />
            <div className="flex flex-wrap gap-2">
               {Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton key={i} className="h-7 w-20 rounded-full" />
               ))}
            </div>
         </Card>

         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
               <Card key={i} className="p-4">
                  <Skeleton className="h-4 w-44" />
                  <Skeleton className="mt-3 h-4 w-full" />
                  <Skeleton className="mt-2 h-4 w-5/6" />
                  <div className="mt-4 flex gap-2">
                     <Skeleton className="h-6 w-16 rounded-full" />
                     <Skeleton className="h-6 w-16 rounded-full" />
                     <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
               </Card>
            ))}
         </div>
      </section>
   );
}
