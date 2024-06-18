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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./form";

export default function Login() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          Login to your account
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <LoginForm />
      </CardContent>
    </Card>
  );
}
