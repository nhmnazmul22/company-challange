import { Team } from "@/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcnui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/shadcnui/badge";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

type Props = {
  data: Team;
};

const iconMap: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  github: Github,
};

const TeamCard = ({ data }: Props) => {
  return (
    <Card className="col-span-12 sm:col-span-6 lg:col-span-3 bg-linear-to-b from-white to-gray-100 shadow hover:shadow-lg duration-300 p-0 py-5 rounded-xl border border-gray-100 gap-3 text-center ">
      <CardHeader className="!p-0">
        <figure className="w-[60px] h-[60px] rounded-full overflow-hidden mx-auto border border-accent">
          <Image
            src={data.profilePic || "/images/avatar.png"}
            width={150}
            height={150}
            alt={data.name}
          />
        </figure>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl mb-1">{data.name}</CardTitle>
        <Badge className="bg-linear-to-bl from-blue-400 to-blue-500 text-primary-foreground">
          {data.position}
        </Badge>

        <CardDescription className="my-5">{data.bio}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex gap-3 justify-center items-center w-full">
          {data.socialMedia.map((media) => {
            const Icon = iconMap[media.name.toLowerCase()];
            if (!Icon) return null;

            return (
              <Link key={media.name} href={media.link} target="_blank">
                <Icon className="text-gray-300 hover:text-accent duration-300 cursor-pointer" />
              </Link>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
