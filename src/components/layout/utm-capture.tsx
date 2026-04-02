"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/tracking";

/** Captures UTM params from URL into sessionStorage on first visit */
export function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);
  return null;
}
