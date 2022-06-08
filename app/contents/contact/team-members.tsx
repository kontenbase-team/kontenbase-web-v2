import { Avatar, ExternalLinks } from "~/components";
import { getNameColor, getNameInitials } from "~/utils";

interface TeamMembersProps {
  data: any;
}

export const TeamMembers = ({ data }: TeamMembersProps) => {
  return (
    <div className="stack-v w-full gap-5">
      {data.map((part: any) => {
        return (
          <div key={part.type} className="stack-v w-full gap-3">
            <h3>{part.type}</h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {part.members.map((member: any) => {
                const nameInitials = getNameInitials(member.name);
                const nameColor = getNameColor(nameInitials);

                return (
                  <div key={member.name} className="card space-y-5">
                    <Avatar
                      // src={member.avatarUrl}
                      name={nameInitials}
                      size="2xl"
                      style={{
                        backgroundColor: nameColor,
                      }}
                    />

                    <div>
                      <h4>{member.name}</h4>
                      <h5>{member.role}</h5>
                    </div>

                    {member.links && (
                      <div>
                        <ExternalLinks links={member.links} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
