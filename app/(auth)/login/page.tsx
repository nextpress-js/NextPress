import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - NextPress",
  description: "NextPress login page",
};

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <Card
      style={{
        /* From https://css.glass */
        background: "rgba(255, 255, 255, 0.25)",
        borderRadius: "1rem",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-white">
          Login to your account
        </CardTitle>
        <CardDescription className="text-white">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label className="text-white" htmlFor="email">
            Email
          </Label>
          <Input
            className="text-white"
            id="email"
            type="email"
          />
        </div>
        <div className="grid gap-2">
          <Label className="text-white" htmlFor="password">
            Password
          </Label>
          <Input
            className="text-white"
            id="password"
            type="password"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Create account
        </Button>
      </CardFooter>
    </Card>
  );
}
