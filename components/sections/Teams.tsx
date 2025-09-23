import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import teams from "@/data/teams";
import TeamCard from "../ui/TeamCard";

const Teams = () => {
  return (
    <section className="bg-gray-50">
      <Container>
        <SectionHeading
          title="Meet Our Team"
          subTitle="The brilliant minds behind our innovative solutions and exceptional service."
        />

        <div className="grid grid-cols-12 mt-16 gap-5">
          {teams.map((team) => (
            <TeamCard key={team.id} data={team} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Teams;
