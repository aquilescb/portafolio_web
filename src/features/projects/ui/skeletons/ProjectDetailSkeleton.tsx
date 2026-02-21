import { Skeleton } from "../../../../shared/ui/feedback/Skeleton";
import { Card } from "../../../../shared/ui/primitives/Card";

export function ProjectDetailSkeleton() {
   return (
      <div className="space-y-10">
         {/* Hero */}
         <section className="space-y-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-72" />
            <Skeleton className="h-4 w-[520px] max-w-full" />

            <Card className="p-4">
               <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                     <Skeleton key={i} className="h-6 w-20 rounded-full" />
                  ))}
               </div>

               <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <Skeleton className="h-4 w-64" />
                  <Skeleton className="h-4 w-52" />
               </div>
            </Card>
         </section>

         {/* Sections */}
         {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="p-5">
               <Skeleton className="h-5 w-56" />
               <Skeleton className="mt-4 h-4 w-full" />
               <Skeleton className="mt-2 h-4 w-11/12" />
               <Skeleton className="mt-2 h-4 w-10/12" />
            </Card>
         ))}

         {/* Extras row */}
         <div className="grid gap-4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
               <Card key={i} className="p-5">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="mt-4 h-4 w-full" />
                  <Skeleton className="mt-2 h-4 w-10/12" />
                  <Skeleton className="mt-2 h-4 w-9/12" />
               </Card>
            ))}
         </div>

         {/* Resources */}
         <Card className="p-5">
            <Skeleton className="h-5 w-32" />
            <div className="mt-4 grid gap-2">
               {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
               ))}
            </div>
         </Card>
      </div>
   );
}
