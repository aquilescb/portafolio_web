import React, { Suspense } from "react";
import { RouteLoading } from "../../shared/ui/feedback/RouteLoading";

export function withSuspense(
   node: React.ReactNode,
   fallback?: React.ReactNode,
) {
   return <Suspense fallback={fallback ?? <RouteLoading />}>{node}</Suspense>;
}
