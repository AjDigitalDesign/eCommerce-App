import { Button } from "@/app/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

function StripeSuccessPage() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">Thanks for you purchase</p>
          <p className="my-2">Enjoy your product</p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StripeSuccessPage;
