"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    user: "Jean Dupont",
    action: "a créé une nouvelle facture",
    time: "Il y a 2 min",
    avatar: "https://github.com/shadcn.png",
  },
  {
    user: "Marie Martin",
    action: "a mis à jour le stock",
    time: "Il y a 15 min",
    avatar: "https://github.com/shadcn.png",
  },
  {
    user: "Pierre Durand",
    action: "a ajouté un nouveau client",
    time: "Il y a 1h",
    avatar: "https://github.com/shadcn.png",
  },
  {
    user: "Sophie Bernard",
    action: "a clôturé la caisse",
    time: "Il y a 3h",
    avatar: "https://github.com/shadcn.png",
  },
];

export function RecentActivity() {
  return (
    <Card className="bg-white border border-gray-100 shadow-sm h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Activité Récente
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9 border border-gray-100">
                <AvatarImage src={activity.avatar} alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold text-gray-900">
                    {activity.user}
                  </span>{" "}
                  <span className="text-gray-500">{activity.action}</span>
                </p>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
