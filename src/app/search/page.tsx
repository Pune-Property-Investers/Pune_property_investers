"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SearchRedirect() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const queryString = searchParams.toString();
        router.replace(queryString ? `/buy?${queryString}` : "/buy");
    }, [router, searchParams]);

    return null;
}

export default function SearchRedirectPage() {
    return (
        <Suspense fallback={null}>
            <SearchRedirect />
        </Suspense>
    );
}

