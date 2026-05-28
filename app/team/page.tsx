"use client";
import React, { useState, useEffect } from "react";
import { Search, Shield, UserCheck, ShieldAlert, Loader2 } from "lucide-react";


interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: "admin" | "manager" | "user"; 
  company: {
    title: string;
  };
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");


  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/users?limit=20");
        const data = await res.json();
        
        
        const formattedMembers = data.users.map((user: any, index: number) => {
          let assignedRole: "admin" | "manager" | "user" = "user";
          if (index % 4 === 0) assignedRole = "admin";
          else if (index % 3 === 0) assignedRole = "manager";

          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
            role: assignedRole,
            company: {
              title: user.company?.title || "Software Engineer",
            },
          };
        });

        setMembers(formattedMembers);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);


  const filteredMembers = members.filter((member) => {
    const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
    const matchesSearch =
      fullName.includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.company.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = roleFilter === "all" || member.role === roleFilter;

    return matchesSearch && matchesRole;
  });


  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 dark:bg-rose-500/10 dark:text-rose-400">
            <ShieldAlert className="h-3 w-3" /> Admin
          </span>
        );
      case "manager":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
            <Shield className="h-3 w-3" /> Manager
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            <UserCheck className="h-3 w-3" /> User
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
     
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Team Management</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Manage your team members, roles, and system permissions live from the server.
        </p>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, email, job..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:bg-slate-800"
          />
        </div>

       
        <div className="w-full sm:w-auto">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="h-9 w-full sm:w-40 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition-all focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>

      
      {loading ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600 dark:text-indigo-400" />
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Loading live team data...</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-slate-500 dark:text-slate-400">
              <thead className="bg-slate-50 font-medium text-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                <tr>
                  <th className="px-6 py-4">Member</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Job Title</th>
                  <th className="px-6 py-4">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 border-t border-slate-100 dark:divide-slate-800/60 dark:border-slate-800">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="flex items-center gap-3 px-6 py-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                        <img className="h-10 w-10 rounded-full bg-slate-100 object-cover" src={member.image} alt="" />
                        <div>
                          <div className="text-sm font-semibold">{member.firstName} {member.lastName}</div>
                          <div className="text-xs text-slate-400 dark:text-slate-500">ID: #{member.id}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{member.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-300">
                        {member.company.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{getRoleBadge(member.role)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-12 text-sm text-slate-400 dark:text-slate-500">
                      No team members found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}