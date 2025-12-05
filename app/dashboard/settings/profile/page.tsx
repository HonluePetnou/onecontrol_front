"use client";

import { SettingsLayout } from "@/components/dashboard/settings/SettingsLayout";
import { ProfileForm } from "@/components/dashboard/settings/ProfileForm";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <SettingsLayout>
      <ProfileForm />
    </SettingsLayout>
  );
}
